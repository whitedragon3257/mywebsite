/*
    Criando serivdor para a pagina html sobre minha pessoa
*/

const express = require('express');
const app = express();
const path = require('path'); // Importando o módulo 'path'

const PORT = 3000;

// Defininido a pasta 'public' como o diretório estático
app.use(express.static(path.join(__dirname, 'public')));

// Rota para renderizar o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciando o servidor na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


/*
    EXECUÇÃO
    -> no terminal informar os seguintes codigos:
        codigo 1: npm install repl
            esperar instalar com sucesso
        codigo 2: npm install express
            esperar instalar com sucesso
        codigo 3: node server.js
            servidor comecara a ser rodado
*/