const mongoose = require("mongoose");

const MenuSchema = mongoose.Schema({
  title: String,
  imageProfile: String,
  price: Number,
  category: String,
});

module.exports = mongoose.model("menu", MenuSchema);
