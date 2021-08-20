//
//  Item definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const itemSchema = new Schema({
  sku: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  upc: {
    type: String,
    required: false, // Not required due to no data
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: false, // Not required due to no data
  },
  primaryUoM: {
    type: String,
    default: "EA",
  },
  UPC: {
    type: String,
  },
  restorePoint: {
    type: Number,
    min: 0,
    default: 0,
  },
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
