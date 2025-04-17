
# API de To-Do List com Autenticação
### Api em desenvolvimento

Esta é uma API de To-Do List que permite aos usuários se registrarem, fazerem login e gerenciarem suas tarefas pessoais. Ela implementa autenticação com JWT e armazena dados no MongoDB. O projeto utiliza as tecnologias: Express, Mongoose, Joi, Bcrypt, e JWT.

## Tecnologias Utilizadas

- **Express**: Framework para construir a API.
- **Mongoose**: ORM para MongoDB.
- **Joi**: Validação de dados de entrada.
- **Bcrypt**: Criptografia de senhas.
- **JWT**: Autenticação baseada em JSON Web Tokens.
- **Mocha/Chai (opcional)**: Para testes unitários (a ser implementado).

## Requisitos

- Node.js (v14 ou superior)
- MongoDB (ou MongoDB Atlas)

## Instalação

### 1. Clonar o repositório
```bash
git clone git@github.com:vitorbatista1/api_to_do_list.git
cd api_to_do_list
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e adicione a seguinte configuração:

```env
MONGO_URI=<Sua URL do MongoDB>
JWT_SECRET=<Chave secreta para o JWT>
```

### 4. Rodar a aplicação
```bash
node start.js
```

A API estará disponível em `http://localhost:3000`.

## Rotas

### 1. POST /signup
Cria um novo usuário.

**Corpo da requisição:**
```json
{
  "email": "usuario@example.com",
  "password": "senha_segura"
}
```

**Resposta:**
```json
{
  "message": "Usuário criado com sucesso."
}
```

### 2. POST /login
Faz login do usuário e retorna um JWT.

**Corpo da requisição:**
```json
{
  "email": "usuario@example.com",
  "password": "senha_segura"
}
```

**Resposta:**
```json
{
  "token": "<JWT_TOKEN>"
}
```

### 3. GET /todos
Retorna todas as tarefas do usuário logado.

**Cabeçalho (Authorization):**
```
Authorization: Bearer <token>
```

**Resposta:**
```json
[
  {
    "id": "1",
    "title": "Comprar leite",
    "status": "pendente"
  }
]
```

### 4. POST /todos
Cria uma nova tarefa.

**Cabeçalho (Authorization):**
```
Authorization: Bearer <token>
```

**Corpo da requisição:**
```json
{
  "title": "Nova tarefa",
  "status": "pendente"
}
```

**Resposta:**
```json
{
  "id": "3",
  "title": "Nova tarefa",
  "status": "pendente"
}
```

### 5. PUT /todos/:id
Atualiza uma tarefa existente.

**Cabeçalho (Authorization):**
```
Authorization: Bearer <token>
```

**Corpo da requisição:**
```json
{
  "title": "Tarefa atualizada",
  "status": "em andamento"
}
```

**Resposta:**
```json
{
  "id": "3",
  "title": "Tarefa atualizada",
  "status": "em andamento"
}
```

### 6. DELETE /todos/:id
Deleta uma tarefa existente.

**Cabeçalho (Authorization):**
```
Authorization: Bearer <token>
```

**Resposta:**
```json
{
  "message": "Tarefa deletada com sucesso."
}
```

## Autenticação e Segurança

- Senhas são criptografadas com Bcrypt.
- JWT é usado para autenticação nas rotas protegidas.

## Validação de Dados

Utilizamos Joi para validar entradas de dados nas rotas.

## Estrutura do Projeto

```
/src
  /controllers
  /models
  /middlewares
  /routes
  /utils
  /validation
  /tests
/config
```

## Testes Unitários

Utilize Mocha e Chai para escrever e executar os testes.

```bash
npm test
```

## Contribuindo

1. Fork o repositório.
2. Crie uma branch.
3. Faça suas alterações e commit.
4. Envie para o branch principal.
5. Abra um Pull Request.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
