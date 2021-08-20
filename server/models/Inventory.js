//
//  Inventory definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const inventorySchema = new Schema({
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
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
