const http = require('http');


const requestHandler = (req, res) => {
console.log(req.url);
};

const PORT = 8080;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
console.log(`Server started in http://localhost:${PORT}`);
});