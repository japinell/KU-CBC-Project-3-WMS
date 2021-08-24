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
  customer: {
    type: Schema.Types.ObjectId,
    ref: "AddressBook",
    required: true,
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
  taskDetails: [
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
