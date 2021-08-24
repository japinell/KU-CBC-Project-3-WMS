//
//  Kardex definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const kardexSchema = new Schema({
  sku: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  lot: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  uom: {
    type: String,
    required: true,
  },
  operation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const Kardex = mongoose.model("Kardex", kardexSchema);

module.exports = Kardex;
