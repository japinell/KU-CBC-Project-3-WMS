//
//  Operation definition
//
const { Schema } = require("mongoose");

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
});

module.exports = operationSchema;
