//
//  Kardex definition
//
const { Schema } = require("mongoose");

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
});

module.exports = kardexSchema;
