const mongoose = require("mongoose");
require("dotenv").config();


const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
    try {
        const db = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          const { name, host } = db.connection;
          console.log(`Servidor conectado a DB: ${name} in host: ${host}`);
        } catch (error) {
          console.error("Error conectando to DB");
        }
      };

      module.exports = connect;

