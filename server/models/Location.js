//
//  Location definition
//
const { Schema } = require("mongoose");

//
const locationSchema = new Schema({
  area: {
    type: String,
    required: true,
  },
  row: {
    type: String,
  },
  bay: {
    type: String,
  },
  level: {
    type: String,
  },
  bin: {
    type: String,
  },
  allowPutaway: {
    type: Boolean,
    default: false,
  },
  allowPicking: {
    type: Boolean,
    default: false,
  },
  allowReplenish: {
    type: Boolean,
    default: false,
  },
});

module.exports = locationSchema;
