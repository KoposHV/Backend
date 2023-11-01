const http = require("htpp");

const server = htpp.createServer((req, res) => {
    res.writeHead(200);
    res.setHeader('Content-Type', 'text/plain');
    res.end('My first server');

});

server.listen(8080, () => {
    console.log('Servidor escuchando en http://localhost:8080');

});

