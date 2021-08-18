//
//  Order header definition
//
const { Schema } = require("mongoose");

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
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  vendorId: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = orderHeaderSchema;
