const http = require("http");
const fs = require('fs');


const requestHandler = (req, res) => {
    
    if (req.url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(`
        <h1>Mi primer servidor</h1>
        <p>Esta es la ruta principal en "/"</p>
      `);
    } else if (req.url === "/character") {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(
          JSON.stringify({
            results: [
              {
                name: "Mortadelo",
                status: "Alto",
              },
              {
                name: "Filemon",
                status: "Bajo",
              },
            ],
          })
        );
      } else {
        res.setHeader("Content-Type", "text/plain");
        res.writeHead(200);
        res.end("Not Found");
      }
    };
    
   
    const server = http.createServer(requestHandler);
    
    
    const PORT = 8080;
    
    server.listen(PORT, () => {
      console.log(`Servidor levantado en http://localhost:${PORT}`);
    });