// test.js
// Teste simples: realiza GET em localhost:3000/ e verifica a resposta

const http = require('http');
const assert = require('assert');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      // Compara o body retornado com o texto esperado
      assert.strictEqual(data, 'Hello CI/CD!');
      console.log('✅ TESTE PASSOU: resposta correta!');
      process.exit(0); // sucesso
    } catch (err) {
      console.error('❌ TESTE FALHOU:', err.message);
      process.exit(1); // falha
    }
  });
});

req.on('error', (e) => {
  console.error('❌ ERRO NO TESTE:', e.message);
  process.exit(1);
});

req.end();
