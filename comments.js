const http = require('http');

// Cria o servidor web
const server = http.createServer((req, res) => {
  // Define o cabeçalho da resposta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Envia a resposta
  res.end('Servidor web criado com sucesso!\n');
});

// Define a porta para o servidor
const PORT = 3000;

// Inicia o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
