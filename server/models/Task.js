//
//  Task definition
//
const { Schema } = require("mongoose");

//
const taskSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  operationId: {
    type: Schema.Types.ObjectId,
    ref: "Operation",
    required: true,
  },
});

module.exports = taskSchema;
