const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
    name: {type: String, required: true},
    capital: {type: String, required: true},
    extension: {type: Number, required: false},
    flag: {type: String, required: true},
    inhabitants: {type: Number, required: true},
    released: {type: Boolean, required: false},
},
{
    timestamps: true,
}
);

const Country = mongoose.model("country", CountrySchema);

module.exports = Country;