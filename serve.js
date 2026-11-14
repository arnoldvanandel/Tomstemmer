// Kleine lokale server voor de Tomstemmer: node serve.js  ->  http://localhost:5173
const http = require('http'), fs = require('fs'), path = require('path');
http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'tomstemmer.html'), (err, data) => {
    if (err) { res.writeHead(500); res.end('tomstemmer.html niet gevonden'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(5173, () => console.log('Tomstemmer draait op http://localhost:5173'));
