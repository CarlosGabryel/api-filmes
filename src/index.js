// index.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 8080;

const db = new sqlite3.Database('./db/database.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
    // Cria a tabela 'filmes' se ela não existir
    db.run(`CREATE TABLE IF NOT EXISTS filmes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      genero TEXT NOT NULL
    )`);

    // Insere alguns filmes de exemplo
    const filmesDeExemplo = [
      ['A Origem', 'Ficção Científica'],
      ['Interestelar', 'Ficção Científica'],
      ['Pulp Fiction', 'Crime'],
      ['O Poderoso Chefão', 'Drama']
    ];

    const stmt = db.prepare(`INSERT OR IGNORE INTO filmes (titulo, genero) VALUES (?, ?)`);
    filmesDeExemplo.forEach(filme => {
      stmt.run(filme);
    });
    stmt.finalize();
  }
});


app.get('/api/filmes', (req, res) => {
  db.all('SELECT * FROM filmes', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json(rows);
  });
});

app.post('/api/filmes', (req, res) => {
  const { titulo, genero } = req.body;
  if (!titulo || !genero) {
    return res.status(400).json({ error: 'Título e gênero do filme são obrigatórios.' });
  }

  const sql = `INSERT INTO filmes (titulo, genero) VALUES (?, ?)`;
  db.run(sql, [titulo, genero], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID, titulo, genero });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`API: http://localhost:${port}/api/filmes`);
});