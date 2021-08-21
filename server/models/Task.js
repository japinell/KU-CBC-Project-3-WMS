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
  items: [
    {
      item: { type: Schema.Types.ObjectId, ref: "Item", required: true },
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
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
