//
//  Kardex definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const kardexSchema = new Schema({
  sku: {
    type: Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
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
    type: Schema.Types.ObjectId,
    ref: "UoM",
    required: true,
  },
  operation: {
    type: Schema.Types.ObjectId,
    ref: "Operation",
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
