const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./user");

const productSchema = Schema({
  title: String,
  price: Number,
  description: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
});

module.exports = mongoose.model("Product", productSchema);
