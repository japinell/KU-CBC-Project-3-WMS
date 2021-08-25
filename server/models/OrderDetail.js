//
//  Order header definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const orderDetailSchema = new Schema({
  orderType: {
    type: String,
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  orderDetails: [
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

const OrderDetail = mongoose.model("OrderDetail", orderDetailSchema);

module.exports = OrderDetail;
