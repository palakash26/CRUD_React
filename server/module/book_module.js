const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  BookName: {
    type: String,
    required: true,
  },
  BookTitele: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  SellingPrice: {
    type: Number,
    required: true,
  },
  PublishingDate: {
    type: String
  },
},{
    timestamps: true,
});


const Book = mongoose.model("Book", bookSchema);

module.exports = {Book};
