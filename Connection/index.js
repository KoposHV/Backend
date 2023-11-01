const express= require("express");
require("dotenv").config();
const connect = require("./utils/db");

const server = express();

connect();

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});



