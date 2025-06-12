const mongoose = require('mongoose');

const databasesConection = async () => {
    mongoose
    .connect("mongodb://localhost:27017/BookStore")
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = databasesConection;