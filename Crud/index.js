const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./utils/db");
const Country = require("./models/country.model");

const server = express();

connect();

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    
    const newCountry = new Country(req.body);
    console.log(newCountry);
    await newCountry.save();
    return res.status(201).json(newCountry);
  } catch (error) {
    return res.status(400).json("Error creating country");
  }
});

router.get("/countries", async (req, res) => {
  try {
    const countries = await Country.find();
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(404).json("Countries not found");
  }
});


server.use("/", router);

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });