## Anotações da primeira aula de MLOps 

Ministrada pelo professor [Daniel Lucrédio](https://www.linkedin.com/in/daniel-lucr%C3%A9dio-bb7b9122a/) em parceria coma fundação Tomorrow da UFBA (Universidade Federal da Bahia). 
O conteudo é centralizado em torno de pratica de devOps para Machine Learning, com o objetivo de facilitar a produção de modelos computacionais.

O curso é baseado no livro [Prática de DevOps com Docker para Machine Learning](https://aurimrv.gitbook.io/pratica-devops-com-docker-para-machine-learning?authuser=0)

#### Requisitos minimos:
- Conhecimento em `Python`
- Conhecimento em Machine Learning com `Jupiter Notebook`
- Conhecimento Basicos em Docker

### **Virtualização**
Simular um ambiente de produção em um ambiente de desenvolvimento

#### Tipos:
- HiperVisor Tipo 1 (Bare Metal): O nucleo do sistema operacional é instalado diretamente no Hardware.
- Hipervisor Tipo 2 (Hosted): O Hipervisor é instalado em cima de um sistema operacional.
- Containers: São mais leves que as maquinas virtuais, compartilham o mesmo `Kernel` do sistema operacional isso faz com que
o container seja mais leve, mais rapido e funcione de maneira isolada.

### Docker
Docker é uma plataforma de virtualização de containers que permite a criação e execução de containers de maneira simples, rapida e isolada do sistema operacional.

#### Dicionario Docker:
- **Imagem de contêiner:** um pacote com todas as dependências e informações necessárias para criar um contêiner. Uma imagem inclui todas as dependências (como estruturas), além da configuração de implantação e execução a ser usada por um runtime de contêiner. Geralmente, uma imagem deriva de várias imagens base que são camadas empilhadas umas sobre as outras para formar o sistema de arquivos do contêiner. Uma imagem é imutável depois de ser criada.

- **Dockerfile:** um arquivo de texto que contém instruções para criar uma imagem do Docker. É como um script em lotes, a primeira linha declara a imagem base com a qual começar e, em seguida, siga as instruções para instalar os programas necessários, copiar os arquivos e assim por diante, até obter o ambiente de trabalho que precisa.

- **Build:** a ação de criar de uma imagem de contêiner com base nas informações e no contexto fornecido pelo `Dockerfile`, além de arquivos adicionais na pasta em que a imagem é criada. Você pode criar imagens com um simples comando da `Docker CLI` (Command-Line Interface).

- **Contêiner:** uma instância de uma imagem do Docker. Um contêiner representa a execução de um único aplicativo, processo ou serviço. Consiste no conteúdo de uma imagem do Docker, um ambiente de execução e um conjunto padrão de instruções. Ao dimensionar um serviço, você cria várias instâncias de um contêiner da mesma imagem. Ou um trabalho em lotes pode criar vários contêineres da mesma imagem, passando parâmetros diferentes para cada instância.

- **Volumes:** oferecem um sistema de arquivos gravável que o contêiner pode usar. Uma vez que as imagens são somente leitura, mas a maioria dos programas precisam gravar para o sistema de arquivos, os volumes adicionam uma camada gravável sobre a imagem de contêiner, de modo que os programas têm acesso a um sistema de arquivos gravável. O programa não sabe que está acessando um sistema de arquivos em camadas, é apenas o sistema de arquivos como de costume. Os volumes ficam no sistema de host e são gerenciados pelo Docker.

- **Repositório:** uma coleção de imagens do Docker relacionadas, rotulada com uma marcação que indica a versão da imagem. Alguns repositórios contêm várias variantes de uma imagem específica, como uma imagem que contém `SDKs` (mais pesado), uma imagem contendo apenas o suporte para execução (runtime), que são mais leves, etc. Essas variantes podem ser etiquetadas. Um único repositório pode conter variantes de plataforma, como uma imagem do Linux e uma imagem do Windows.

- **Docker Hub:** um registro público para carregar imagens e trabalhar com elas. O Docker Hub hospeda imagens do Docker, registros públicos ou privados, cria gatilhos e ganchos da Web e integra-se com o GitHub e o Bitbucket. Aproveite e crie uma conta no Docker Hub, o que permite que você poste imagens de contêineres que você venha a desenvolver.

- **Compose:** uma ferramenta de linha de comando e formato de arquivo YAML com metadados para definir e executar aplicativos de vários contêineres. Você define um único aplicativo com base em várias imagens com um ou mais arquivos .yml que podem substituir valores dependendo do ambiente. Depois de criar as definições, você pode implantar todo o aplicativo de vários contêineres com um único comando, que cria um contêiner por imagem no host do Docker.

### DevOps
DevOps é uma cultura que tem como objetivo a colaboração entre os times de desenvolvimento e operações, com o objetivo de automatizar e integrar o processo de desenvolvimento de software.

#### CI (Continuous Integration):
É uma pratica de desenvolvimento de software onde os desenvolvedores integram o codigo no repositório compartilhado varias vezes ao dia. A ideia é que a cada integração o codigo seja testado automaticamente, para garantir que o codigo integrado não quebre o sistema.

#### CD (Continuous Delivery):
É uma pratica de desenvolvimento de software onde o codigo é construido, testado e implantado de maneira automatizada.

## Configurações de Ambiente:

### Python:
Utilizaremos `Python` como linguagem de desenvolvimento e o `pyEnv` para gerenciar as versões do `Python`.
Precisaremos tambem de um gerenciamento dos ambientes virtuais para `Python`, para isso utilizaremos o `pyenv-virtualenvwrapper`.

### Docker
Utilizaremos o `Docker` para criar e gerenciar os containers que irão rodar nossas aplicações de Machine Learning.

#### Instalação do Docker:
**Windows:**
Se estiver utilizando o `Windows` sera necessario o uso do `wsl` (Windows Subsystem for Linux) para instalar o docker.

Para instalar o `wsl` basta seguir a [documentação oficial.](https://docs.microsoft.com/pt-br/windows/wsl/install)

**Linux:**
Caso esteja no `Linux`, basta seguir a [documentação oficial.](https://docs.docker.com/desktop/install/linux-install/)

#### Docker Hub:
Sera necessario estar ambientado no docker hub, para isso basta criar uma conta no [Site Oficial](https://hub.docker.com/), assim devemos conseguir verificar a imagem que iremos utilziar para o curso e publicar as nossas.

#### Dockerfile:

O `Dockerfile` é um arquivo de texto que contem todas as instruções necessarias para criar uma imagem do Docker. Ele é como um script em lote, a primeira linha declara a imagem base com a qual começar e, em seguida, siga as instruções para instalar os programas necessários, copiar os arquivos e assim por diante, até obter o ambiente de trabalho que precisa.

- `Requirements.txt`: Arquivo que contem todas as dependencias do projeto.
- `script.py`: Arquivo que contem o codigo do projeto.

``` Dockerfile
FROM python:3.8-slim-buster

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
```

#### Build:
A ação de criar uma imagem de contêiner com base nas informações e no contexto fornecido pelo `Dockerfile`, além de arquivos adicionais na pasta em que a imagem é criada. Você pode criar imagens com um simples comando da `Docker CLI` (Command-Line Interface).

```bash
docker build -t python:sample . .
```
#### Run:
Para rodar o container basta utilizar o comando `docker run`:

```bash
docker run -it python:sample
```

#### Publicar no Docker Hub:
Para publicar a imagem no Docker Hub, basta seguir os passos abaixo:

```bash
docker build -t your-username/python:sample 
```
depois é necessario realizar login no docker pelo CLI com:  
```bash
docker login -u your-username
```
inserindo a sua senha, apos isso basta realizar o push da imagem para o docker hub:

```bash
docker push your-username/python:sample
```
e agora para rodar a sua imagem basta utilizar o comando:

```bash
docker run your-username/python:sample
```
