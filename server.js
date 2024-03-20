const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo com Express no Codespace!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
