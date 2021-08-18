//
//  Inventory definition
//
const { Schema } = require("mongoose");

//
const inventorySchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  lot: {
    type: String,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
    min: 0.0,
    default: 0,
  },
});

module.exports = inventorySchema;
