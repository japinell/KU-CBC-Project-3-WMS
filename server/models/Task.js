//
//  Task definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const taskSchema = new Schema({
  orderType: {
    type: String,
  },
  orderNumber: {
    type: Number,
  },
  user: {
    type: String,
    required: true,
  },
  operation: {
    type: Number,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
  item: [
    {
      id: { type: Number },
      quantity: { type: Number },
      uom: { type: String },
      status: {
        type: String,
      },
    },
  ],
  notes: {
    type: String,
  },
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
