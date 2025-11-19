<<<<<<< HEAD
# 🎮 API de Games

API RESTful para gerenciamento de jogos desenvolvida com Node.js, Express e MongoDB.

![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![Express](https://img.shields.io/badge/Express-v4.18-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Como Executar](#como-executar)
- [Endpoints da API](#endpoints-da-api)
- [Exemplos de Uso](#exemplos-de-uso)
- [Testando com Postman](#testando-com-postman)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Middlewares](#middlewares)
- [Tratamento de Erros](#tratamento-de-erros)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

---

## 📖 Sobre o Projeto

Esta API foi desenvolvida como parte de um projeto educacional para demonstrar a criação de uma API RESTful completa utilizando Node.js, Express e MongoDB. A API permite realizar operações CRUD (Create, Read, Update, Delete) em um banco de dados de jogos.

### Objetivo

Fornecer uma solução simples e eficiente para gerenciar informações sobre jogos, incluindo título, gênero, plataforma e ano de lançamento.

---

## ✨ Funcionalidades

- ✅ Criar novos jogos
- ✅ Listar todos os jogos cadastrados
- ✅ Buscar jogo específico por ID
- ✅ Atualizar informações de um jogo
- ✅ Deletar jogos
- ✅ Validação de dados
- ✅ Tratamento de erros
- ✅ Log de requisições
- ✅ Suporte a CORS

---

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript
- **[Express](https://expressjs.com/)** - Framework web para Node.js
- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** - Banco de dados NoSQL na nuvem
- **[Mongoose](https://mongoosejs.com/)** - ODM para MongoDB
- **[dotenv](https://github.com/motdotla/dotenv)** - Gerenciamento de variáveis de ambiente
- **[CORS](https://github.com/expressjs/cors)** - Middleware para habilitar CORS
- **[Nodemon](https://nodemon.io/)** - Reinicialização automática do servidor (dev)

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão 14 ou superior)
- **[npm](https://www.npmjs.com/)** ou **[yarn](https://yarnpkg.com/)**
- **[Git](https://git-scm.com/)**
- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** - Conta gratuita
- **[Postman](https://www.postman.com/)** (opcional, para testes)

---

## 🔧 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/api-games.git
cd api-games
```

### 2. Instale as dependências
```bash
npm install
```

Ou se preferir usar yarn:
```bash
yarn install
```

---

## ⚙️ Configuração

### 1. Configure o MongoDB Atlas

1. Acesse [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crie uma conta gratuita (se não tiver)
3. Crie um novo cluster (Free Tier)
4. Configure um usuário de banco de dados:
   - Database Access → Add New Database User
   - Defina usuário e senha
5. Configure o acesso de rede:
   - Network Access → Add IP Address
   - Escolha "Allow Access from Anywhere" (0.0.0.0/0)
6. Obtenha a string de conexão:
   - Clusters → Connect → Connect your application
   - Copie a connection string

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:
```env
PORT=3000
MONGODB_URI=mongodb+srv://seu-usuario:sua-senha@cluster.mongodb.net/games-db?retryWrites=true&w=majority
```

> ⚠️ **Importante:** Substitua `seu-usuario` e `sua-senha` pelas credenciais do MongoDB Atlas.

### 3. Arquivo `.env.example`

O arquivo `.env.example` deve conter:
```env
PORT=3000
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/database?retryWrites=true&w=majority
```

---

## 🎯 Como Executar

### Modo de Desenvolvimento
```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3000`

### Modo de Produção
```bash
npm start
```

### Verificar se está funcionando

Acesse no navegador ou Postman:
```
http://localhost:3000
```

Você deve ver:
```json
{
  "message": "API de Games - Bem-vindo!",
  "version": "1.0.0",
  "endpoints": {
    "games": "/games"
  }
}
```

---

## 📡 Endpoints da API

### Base URL
```
http://localhost:3000
```

### Rotas Disponíveis

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| GET | `/` | Informações da API | Não |
| GET | `/health` | Health check do servidor | Não |
| POST | `/games` | Criar novo game | Não |
| GET | `/games` | Listar todos os games | Não |
| GET | `/games/:id` | Buscar game por ID | Não |
| PUT | `/games/:id` | Atualizar game | Não |
| DELETE | `/games/:id` | Deletar game | Não |

---

## 💡 Exemplos de Uso

### 1. Criar um novo game

**Request:**
```http
POST /games
Content-Type: application/json

{
  "titulo": "The Legend of Zelda: Breath of the Wild",
  "genero": "Aventura",
  "plataforma": "Nintendo Switch",
  "lancamento": 2017
}
```

**Response:** `201 Created`
```json
{
  "_id": "674a1b2c3d4e5f6g7h8i9j0k",
  "titulo": "The Legend of Zelda: Breath of the Wild",
  "genero": "Aventura",
  "plataforma": "Nintendo Switch",
  "lancamento": 2017,
  "createdAt": "2025-11-17T20:30:00.000Z",
  "updatedAt": "2025-11-17T20:30:00.000Z",
  "__v": 0
}
```

### 2. Listar todos os games

**Request:**
```http
GET /games
```

**Response:** `200 OK`
```json
[
  {
    "_id": "674a1b2c3d4e5f6g7h8i9j0k",
    "titulo": "The Legend of Zelda: Breath of the Wild",
    "genero": "Aventura",
    "plataforma": "Nintendo Switch",
    "lancamento": 2017
  },
  {
    "_id": "674a1b2c3d4e5f6g7h8i9j0l",
    "titulo": "God of War Ragnarök",
    "genero": "Ação",
    "plataforma": "PlayStation 5",
    "lancamento": 2022
  }
]
```

### 3. Buscar game por ID

**Request:**
```http
GET /games/674a1b2c3d4e5f6g7h8i9j0k
```

**Response:** `200 OK`
```json
{
  "_id": "674a1b2c3d4e5f6g7h8i9j0k",
  "titulo": "The Legend of Zelda: Breath of the Wild",
  "genero": "Aventura",
  "plataforma": "Nintendo Switch",
  "lancamento": 2017
}
```

### 4. Atualizar um game

**Request:**
```http
PUT /games/674a1b2c3d4e5f6g7h8i9j0k
Content-Type: application/json

{
  "titulo": "The Legend of Zelda: Tears of the Kingdom",
  "lancamento": 2023
}
```

**Response:** `200 OK`
```json
{
  "_id": "674a1b2c3d4e5f6g7h8i9j0k",
  "titulo": "The Legend of Zelda: Tears of the Kingdom",
  "genero": "Aventura",
  "plataforma": "Nintendo Switch",
  "lancamento": 2023,
  "updatedAt": "2025-11-17T21:00:00.000Z"
}
```

### 5. Deletar um game

**Request:**
```http
DELETE /games/674a1b2c3d4e5f6g7h8i9j0k
```

**Response:** `200 OK`
```json
{
  "message": "Game deletado com sucesso"
}
```

---

## 🧪 Testando com Postman

### Importar Collection

1. Abra o Postman
2. Clique em **Import**
3. Selecione o arquivo `api-games.postman_collection.json`
4. Todas as requisições estarão prontas para usar!

### Testar Manualmente

#### Criar Game
```bash
curl -X POST http://localhost:3000/games \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Elden Ring",
    "genero": "RPG",
    "plataforma": "PC",
    "lancamento": 2022
  }'
```

#### Listar Todos
```bash
curl http://localhost:3000/games
```

#### Buscar por ID
```bash
curl http://localhost:3000/games/ID_DO_GAME
```

#### Atualizar
```bash
curl -X PUT http://localhost:3000/games/ID_DO_GAME \
  -H "Content-Type: application/json" \
  -d '{
    "lancamento": 2024
  }'
```

#### Deletar
```bash
curl -X DELETE http://localhost:3000/games/ID_DO_GAME
```

---

## 📁 Estrutura do Projeto
```
api-games/
├── src/
│   ├── models/
│   │   └── game.js              # Schema do MongoDB
│   ├── routes/
│   │   └── routes.js            # Definição das rotas
│   ├── controllers/
│   │   └── gameController.js    # Lógica de negócio
│   ├── middlewares/
│   │   ├── logger.js            # Log de requisições
│   │   ├── validateGame.js      # Validação de dados
│   │   ├── validateObjectId.js  # Validação de ID
│   │   └── errorHandler.js      # Tratamento de erros
│   ├── app.js                   # Configuração do Express
│   └── server.js                # Inicialização do servidor
├── .env                         # Variáveis de ambiente (não commitado)
├── .env.example                 # Exemplo de variáveis de ambiente
├── .gitignore                   # Arquivos ignorados pelo Git
├── package.json                 # Dependências e scripts
├── package-lock.json            # Lock de dependências
├── api-games.postman_collection.json  # Collection do Postman
└── README.md                    # Documentação do projeto
```

---

## ⚙️ Middlewares

A API utiliza os seguintes middlewares:

### Globais

- **CORS** - Permite requisições de diferentes origens
- **express.json()** - Parse de JSON no body
- **express.urlencoded()** - Parse de dados de formulários
- **logger** - Registra todas as requisições no console

### Específicos

- **validateGame** - Valida dados ao criar/atualizar games
- **validateObjectId** - Verifica se o ID do MongoDB é válido
- **errorHandler** - Captura e trata erros da aplicação

---

## ⚠️ Tratamento de Erros

A API retorna os seguintes códigos de status:

| Status | Descrição |
|--------|-----------|
| 200 | Sucesso (OK) |
| 201 | Criado com sucesso (Created) |
| 400 | Requisição inválida (Bad Request) |
| 404 | Recurso não encontrado (Not Found) |
| 500 | Erro interno do servidor (Internal Server Error) |

### Exemplos de Erros

**Dados inválidos (400):**
```json
{
  "message": "Dados inválidos",
  "errors": [
    "Título é obrigatório",
    "Ano de lançamento deve estar entre 1950 e 2030"
  ]
}
```

**Game não encontrado (404):**
```json
{
  "message": "Game não encontrado"
}
```

**ID inválido (400):**
```json
{
  "message": "ID inválido. Use um ID válido do MongoDB."
}
```# api_Games
=======

<img width="1600" height="1000" alt="Captura de tela 2025-11-17 211709" src="https://github.com/user-attachments/assets/619953b0-43bb-44fd-9e7e-83ef394d49dc" />
<img width="1600" height="1000" alt="Captura de tela 2025-11-17 210522" src="https://github.com/user-attachments/assets/59a79c16-ecf9-45b0-88f8-fd2bd41198d1" />
<img width="1600" height="1000" alt="Captura de tela 2025-11-17 203128" src="https://github.com/user-attachments/assets/603c2450-c6e2-40dd-bf9c-0ea1e7b16d26" />
<img width="1600" height="1000" alt="Captura de tela 2025-11-17 202824" src="https://github.com/user-attachments/assets/4dc9cdc2-6af1-4709-ab6a-31109101afbc" />
<img width="1600" height="1000" alt="Captura de tela 2025-11-17 202010" src="https://github.com/user-attachments/assets/8b5d1cc7-e5e5-444c-93b6-b8abeec29104" />
<img width="1920" height="1140" alt="Captura de tela 2025-11-17 201530" src="https://github.com/user-attachments/assets/9b502e4a-3f3f-4154-bfc4-254e252ab14a" />
<img width="1600" height="1000" alt="Captura de tela 2025-11-17 172916" src="https://github.com/user-attachments/assets/5e0974a2-e438-4711-961d-f3c23207dd6e" />
<img width="1600" height="1000" alt="Captura de tela 2025-11-17 172843" src="https://github.com/user-attachments/assets/a44dfc5e-c20c-411b-979e-6dbc3177aceb" />
<img width="1600" height="1000" alt="Captura de tela 2025-11-17 172748" src="https://github.com/user-attachments/assets/6922f2d8-6f13-45e3-9090-3d013b1a393e" />
<img width="1600" height="1000" alt="Captura de tela 2025-11-17 172639" src="https://github.com/user-attachments/assets/a7bc3d4c-cbab-47ea-9183-a6a13a237bc6" />
