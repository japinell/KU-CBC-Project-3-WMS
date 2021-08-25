//
//  Unit of measure conversion definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const conversionSchema = new Schema({
  sku: {
    type: String,
    required: true,
  },
  uomFrom: {
    type: String,
    required: true,
  },
  uomTo: {
    type: String,
    required: true,
  },
  factor: {
    type: Number,
    required: true,
  },
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const Conversion = mongoose.model("Conversion", conversionSchema);

module.exports = Conversion;
