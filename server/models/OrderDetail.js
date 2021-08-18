//
//  Order header definition
//
const { Schema } = require("mongoose");

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
  itemId: {
    type: Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  uom: {
    type: Schema.Types.ObjectId,
    ref: "UoM",
    required: true,
  },
});

module.exports = orderDetailSchema;
