//
//  Location definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const locationSchema = new Schema({
  area: {
    type: String,
    // required: true,
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
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
