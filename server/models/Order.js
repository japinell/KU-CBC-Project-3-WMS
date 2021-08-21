//
//  Order definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const orderSchema = new Schema({
  orderType: {
    type: String,
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "AddressBook",
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  items: [
    {
      item: { type: Schema.Types.ObjectId, ref: "Item", required: true },
      quantity: { type: Number, min: 0.0 },
      uom: { type: String },
      status: { type: String, default: "U" },
    },
  ],
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
