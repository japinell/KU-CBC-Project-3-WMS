//
//  Address Book definition
//
const { Schema } = require("mongoose");

//
const addressBookSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  address: [String],
  phone: [String],
});

module.exports = addressBookSchema;
