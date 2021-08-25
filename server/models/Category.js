//
//  Category definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
