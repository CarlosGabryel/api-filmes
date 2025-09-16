# API de Filmes

Esta é uma API REST simples para gerenciar uma lista de filmes usando Node.js, Express.js e SQLite3. O desenvolvimento é facilitado pelo uso do Nodemon para reinício automático do servidor.

## Rotas

- `GET /api/filmes`: Retorna a lista de todos os filmes.
- `POST /api/filmes`: Adiciona um novo filme à lista. O corpo da requisição deve ser um JSON com os campos `titulo` e `genero`.

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
5.  A API estará disponível em `http://localhost:8080/api/filmes`. Um arquivo `database.db` será criado no diretório do projeto, onde os dados serão armazenados.

---

## Workflow de Desenvolvimento

Para este projeto, adotei o workflow **Git Flow**. A escolha se deve à sua estrutura robusta e ideal para projetos que podem crescer, pois separa o desenvolvimento de novas funcionalidades em branches dedicadas (`feature/`), o que facilita a colaboração e a organização do código. Embora seja um projeto simples, o Git Flow garante que futuras expansões sejam feitas de forma segura e organizada, minimizando conflitos e mantendo a branch principal (`main`) sempre estável.