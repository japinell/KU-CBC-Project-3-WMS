//
//  Kardex definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const kardexSchema = new Schema({
  item: {
    type: Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  locationId: {
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
  uomId: {
    type: Schema.Types.ObjectId,
    ref: "UoM",
    required: true,
  },
  operationId: {
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
