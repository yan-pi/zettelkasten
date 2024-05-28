## Segunda Aula do Curso de MLOps

Aula refetente ao capitulo 2.1 do
[Livro de DevOps com Docker para Machine Learning](https://aurimrv.gitbook.io/pratica-devops-com-docker-para-machine-learning/id-2-desenvolvimento/2-1-do-notebook-para-aplicacao-parte-1)

Requisitos para trabalhar modelos computacionais:

- .venv
- .gitignore
- Jupyter Notebook

Foi apresentado uma ML Pipeline, que é um conjunto de passos que são executados em sequencia para treinar um modelo de
Machine Learning.

Neste exemplo foi mostrado uma pipeline de treinamento de um modelo de classificação de produtos/objetos, utilizando um
dataset em `CSV` e utilizando MultinomialNB como algoritmo de classificação.

Agora o foco da aula se direciona em como fazer esse modelo rodar conteinerizado e desaclopado do jupyter notebook.

Dividindo os passos in batchs, o professor mostrou como fazer o treinamento do modelo em um script python, e como fazer
a predição em outro script python.

Utilizaremos o como modelo de persistencia de dados o `firebase`

- Criar um projeto no firebase com o nome `BooksDevOpsML1`
- `FireStore` -> `Criar Banco de Dados` -> `Iniciar no modo de teste`
- Criaremos uma collection de produtos chamada `products` e adicionaremos alguns produtos para testar a aplicação.

Cada produto deve conter id categoria e descrição.

| Product ID | Category | Description       |
| ---------- | -------- | ----------------- |
| \*Uuid     | Books    | Clean Archtecture |
| \*Uuid     | Books    | Clean Code        |
| \*Uuid     | Games    | Dark Souls 3      |
| \*Uuid     | Games    | Elden Ridg        |

Proximo passo sera utilizarmos o SDK do firebase para fazer a conexão com o banco de dados, geraremos o json de
autenticação.

Utilzaremos o firebase-admin para fazer a conexão com o banco de dados.

```bash
pip install firebase-admin
```

E consiguraremos a conexão com o banco de dados utilizando o json de autenticação.

```python
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref = db.collection(u'products')
docs = products_ref.stream()

for doc in docs:
  d = doc.to_dict()
  print(f' Descrição = {d ["description"]}\n Categoria = {d["category"]}')
```

Utilizaremos o `pickle` para salvar o modelo treinado.

```python
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import pickle
model = pickle.load(open('model.sav', 'rb'))

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref = db.collection('products')
docs = products_ref.stream()

for doc in docs:
  d = doc.to_dict()
  print(f' Descrição = {d ["description"]}\n Categoria = {d["category"]}')
  imput_message = [d["description"]]
  input_message = model['vect'].transform(input_message)
  final_prediction = model['clf'].predict(input_message)[0]

  doc_ref = db.collection('products').document(doc.id)
  doc_ref.update({'category': final_prediction})
```

Entretando temos um erro no projeto, pois não temos o `Sklearn` instalado no ambiente de execução, para isso
utilizaremos o `Docker` para criar um ambiente de execução.

Com todas as dependencias necessarias, devemos colocar as dependencias necessarias dentro do nosso requiriments.txt.

```requiriments.txt
firebase-admin==6.5.0
scikit-learn==1.4.2
```

então podemos rodar o comando de instalação das dependencias.

```bash
pip install -r requirements.txt
```

## Do notebook para aplicação

Agora sim, você já tem os conhecimentos suficientes para fazer uma API para classificação de produtos. Nossa API terá um
único serviço, que aceita um texto longo e retorna uma categoria. Utilizaremos JSON como formato de entrada e saída de
dados, e utilizaremos o método POST.

Mantendo a filosofia de separar os projetos e os ambientes, vamos começar um novo projeto em um novo ambiente virtual:

Vamos rodar o codigo de criação do ambiente virtual.

```bash
pyenv virtualenv 3.10.2 http-api-classificacao-produtos
pyenv activate http-api-classificacao-produtos
```
Depois devemos criar os nossos `requiriments.txt` com o seguinte conteudo:
```requiriments.txt
Flask==3.0.2
scikit-learn==1.4.1.post1
```
```bash
pip install -r requirements.txt
```
Agora precisamos utilizar o nosso modelo treinado para fazer a classificação dos produtos, o modelo é salvo como um arquivo `.sav` e
precisamos carregar ele para fazer a classificação.

nosso `app.py` ficara da seguinte forma:

```python
from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

model = pickle.load(open('model.sav', 'rb'))

@app.route('/predizer_categoria', methods=['POST'])
def predizer_categoria():
    request_data = request.get_json()
    input_message = [request_data['descricao']]
    input_message = model["vect"].transform(input_message)
    final_prediction = model["clf"].predict(input_message)[0]

    response = {
        'categoria': final_prediction
    }

    return jsonify(response)
```
e então rodando os comandos: 
```bash
export FLASK_DEBUG=1
flask run
```

devemos ter o nosso servidor web rodando com o nosso modelo treinado para fazer a classificação dos produtos.

OBS: devemos habilitar o CORS (cross-Origin Resource Sharing) para permitir que o nosso frontend acesse o nosso backend.

`requirements.txt`
```requirements.txt
+Flask-Cors==4.0.0
```

```bash
pip install -r requirements.txt
```
então devemos adicionar o CORS ao nosso `app.py`

```python
app = Flask(__name__)
+CORS(app)
```
Por fim, teremos uma aplicação web funcional com nosso modelo carregado, o front-end dessa aplicação funcionara da mesma maneira que um serviço web convencional
