// Importa o módulo Express
const express = require('express');

// Cria uma aplicação Express
const app = express();

// Define um endpoint GET na rota /hello-world
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Define a porta em que o servidor vai rodar
const PORT = 3000;

// Inicia o servidor na porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
