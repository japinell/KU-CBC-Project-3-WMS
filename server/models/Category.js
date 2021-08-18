//
//  Category definition
//
const { Schema } = require("mongoose");

//
const categorySchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = categorySchema;
