//requiring mongoose module
const mongoose = require("mongoose");
//creates schema for db collections
const Schema = mongoose.Schema;
//creating a callection
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

//tells mongoose to use to scheme for book collection
const Book = mongoose.model("Book", bookSchema);

//exporting book component
module.exports = Book;
