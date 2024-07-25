### Aula 5

Transformando em uma aplicação com `Flask` e `Docker` em um servidor HTTP estático com `Nginx`

Primeiro, devemos entender um pouco sobre o que é uma aplicação web e sobre o protocolo HTTP.

## WSGI

- **CGI (Common Gateway Interface):** CGI é uma especificação para transferir informações entre um servidor de
  informações e um programa de aplicação. Um programa CGI é qualquer programa projetado para aceitar e retornar dados
  que são transmitidos por meio de um servidor web.

  _Início da web_

- **WSGI (Web Server Gateway Interface):** WSGI é uma especificação para uma interface entre servidores web e aplicações
  web escritas em Python.

  _Os navegadores fazem uma requisição ao servidor web, então o WSGI deve procurar um módulo Python que realizará as
  operações e entregará a resposta._

Devemos então criar um servidor WSGI para lidar com as requisições da nossa aplicação. Uma opção é utilizarmos o pacote
`gunicorn`, que é um servidor WSGI para Python, funcionando como uma camada por cima do Flask.

Comando de instalação:

```bash
pip install gunicorn
```

E configuração no Dockerfile:

```Dockerfile
FROM python:3.10.2
WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
ENTRYPOINT ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
```

O `gunicorn` deve funcionar como um servidor de **PRODUÇÃO**.

### Por que não usar o Flask?

- O Flask é um servidor de desenvolvimento; ele não é recomendado para produção. Ele é lento e menos seguro em
  comparação com um servidor WSGI como o `gunicorn`.

## NGINX

O `NGINX` é um servidor web de código aberto que também pode ser usado como um servidor de proxy reverso, balanceador de
carga, servidor de email e servidor de streaming de mídia.

- O que é um proxy reverso? Um proxy reverso é um servidor que fica entre os clientes e os servidores de backend,
  encaminhando as solicitações dos clientes para os servidores apropriados e retornando as respostas dos servidores aos
  clientes. Ele atua como um intermediário, gerenciando e distribuindo o tráfego de rede.

Primeiro, devemos fazer ambos rodarem no mesmo container e também hospedar a nossa página de cadastro junto com o
`NGINX` (apesar de não ser recomendado justamente pela ideia dos containers ser desacoplamento).

O NGINX deve verificar de onde a request está vindo e realizar o redirecionamento para o serviço solicitado.

Exemplo: (url request com /api/... )

Podemos setar uma variável de ambiente dentro do Dockerfile com:

```Dockerfile
ENV VARIABLE_NAME value
```

Exemplo completo do Dockerfile combinando Flask, Gunicorn e Nginx:

```Dockerfile
FROM python:3.10.2-slim

# Instalação do nginx

# Vamos rodar apt update sem precisar interagir. Essa flag diz isso.
ENV DEBIAN_FRONTEND=noninteractive

# Agora vamos instalar nginx, passando a opção -y para aceitar os prompts
# Após a instalação, vamos remover os caches criados pelo apt update,
# Assim nossa imagem fica mais limpa
RUN apt update && apt install -y nginx && rm -rf /var/lib/apt/lists/*

# Vamos copiar os arquivos estáticos para www (pasta configurada para o nginx)
COPY webclient/* /www/

# E agora vamos copiar o arquivo de configuração do nginx
COPY default /etc/nginx/sites-available/default

# A porta 80 será a utilizada pelo nginx. Vamos expô-la
EXPOSE 80/tcp

# Agora vamos às configurações do nosso app original
WORKDIR /usr/src/app

# Aqui vamos copiar os arquivos um a um, pois agora temos outros
# arquivos que não fazem parte da aplicação e não faz sentido copiar
COPY requirements.txt ./
COPY model.sav ./
COPY app.py ./
RUN pip install --no-cache-dir -r requirements.txt

# Agora vamos copiar um script que roda as duas coisas
# nginx e gunicorn

COPY entrypoint.sh ./
RUN chmod 755 ./entrypoint.sh

CMD ["./entrypoint.sh"]
```

Também tem um novo arquivo, chamado default (sem extensão mesmo). Esse arquivo é a configuração do `NGINX`. Veja seu
conteúdo:

```nginx
server {
    listen 80;

    location / {
        root /usr/src/app/static;
        try_files $uri $uri/ =404;
    }

    location /api {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Com essas configurações, temos um ambiente Docker que executa a aplicação Flask usando Gunicorn como servidor WSGI e
Nginx como proxy reverso, hospedando também arquivos estáticos.

Requisições que chegarem na URL raiz ("/") serão redirecionadas para a pasta www da imagem, que é onde mandamos copiar
os arquivos estáticos. É o primeiro caso de uso que explicamos acima (arquivos estáticos que são tratados pelo nginx
sozinho); e

Requisições que chegarem em URLs que tem "/api/" serão reescritas (rewrite) para suprimir esse trecho, e em seguida
redirecionadas para o gunicorn, que vai rodar na porta 5000. É o segundo caso (requisições que serão repassadas para o
gunicorn, para serem tratadas pelo nosso aplicativo Python).

```entrypoint.sh
#!/bin/bash

gunicorn -w 4 -b 127.0.0.1:5000 app:app &
nginx -g 'daemon off;' &

wait -n

exit $?
```
