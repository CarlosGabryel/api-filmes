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
    db.run(`CREATE TABLE IF NOT EXISTS filmes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      genero TEXT NOT NULL
    )`);
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

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`API: http://localhost:${port}/api/filmes`);
});