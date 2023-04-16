# NODE FIREBASE CRUD API

API de cadastro de usuários com Firebase e Node.js

## Descrição

Esta é uma API criada em Node.js com o framework Express que utiliza o Firebase para cadastrar usuários no Firestore. O objetivo é fornecer uma maneira fácil de criar, ler, atualizar e excluir usuários em um banco de dados não relacional. 

## Como usar

### Pré-requisitos

Antes de executar a aplicação, você deve ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js
- Firebase CLI

### Instalação

1. Clone este repositório em seu computador
2. Instale as dependências executando o comando `npm install`
3. Crie um projeto no Firebase e configure as credenciais de acesso ao Firestore
4. Configure as credenciais do Firebase no arquivo `.env
5. Inicie a aplicação executando o comando `node index.js`

### Variáveis de ambiente

A aplicação utiliza as seguintes variáveis de ambiente para se conectar ao Firebase:

`# FIREBASE`
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

`# APP`
- `PORT`

### Conexão com o Firebase

Para conectar a aplicação ao seu projeto do Firebase, execute os seguintes passos:

1. Acesse o console do Firebase em https://console.firebase.google.com/
2. Crie um novo projeto ou selecione um projeto existente
3. Clique no botão "Adicionar app" para adicionar uma nova aplicação ao projeto
4. Selecione a opção "Web" e defina um nome para a aplicação
5. Copie as credenciais de acesso do Firebase para o arquivo `.env` da aplicação

### Execução

Para executar a aplicação, basta rodar o seguinte comando:

```bash
node index.js
```

### Exemplos de uso
A API suporta as seguintes operações:

- `GET /users`: Retorna todos os usuários cadastrados
- `GET /user/:id`: Retorna um usuário específico pelo id
- `POST /add-user`: Cria um novo usuário
- `PUT /user:/id`: Atualiza um usuário existente pelo seu ID
- `DELETE /user/:id`: Remove um usuário existente pelo seu ID


As requisições devem ser feitas no formato JSON, seguindo o exemplo abaixo:

```bash
{
  "name": "João da Silva",
  "email": "joao@example.com",
  "age": 30
}
```

### Tecnologias usadas
- Node.js
- Express
- Firebase
- Dotenv

### Contribuição
Contribuições são sempre bem-vindas!

### Espero ter ajudado
