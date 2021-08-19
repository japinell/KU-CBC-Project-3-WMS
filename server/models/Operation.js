//
//  Operation definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const operationSchema = new Schema({
  operation: {
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

const Operation = mongoose.model("Operation", operationSchema);

module.exports = Operation;
