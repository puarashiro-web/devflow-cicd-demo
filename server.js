// server.js
// Servidor Express minimalista com rota GET / que responde "Hello CI/CD!"

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota principal: responde com texto simples para verificarmos nos testes
app.get('/', (req, res) => {
  res.send('Hello CI/CD!');
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
