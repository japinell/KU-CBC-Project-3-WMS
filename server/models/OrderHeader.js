//
//  Order header definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const orderHeaderSchema = new Schema({
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
  // orderDetails: {
  //   type: Schema.Types.ObjectId,
  //   ref: "OrderDetail",
  //   required: true,
  // },
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const OrderHeader = mongoose.model("OrderHeader", orderHeaderSchema);

module.exports = OrderHeader;
