# API de Filmes

Esta é uma API REST simples para gerenciar uma lista de filmes usando Node.js, Express.js e SQLite3. O desenvolvimento é facilitado pelo uso do Nodemon para reinício automático do servidor.

## Rotas

- `GET /api/filmes`: Retorna a lista de todos os filmes.

## Como Executar

1.  Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2.  Navegue até o diretório do projeto no terminal.
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Inicie o servidor (com Nodemon):
    ```bash
    npm start
    ```
5.  A API estará disponível em `http://localhost:8080`. Um arquivo `database.db` será criado no diretório do projeto, onde os dados serão armazenados.