//
//  Unit of measure definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const uomSchema = new Schema({
  uom: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const UoM = mongoose.model("UoM", uomSchema);

module.exports = UoM;
