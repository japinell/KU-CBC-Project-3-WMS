//
//  Address Book definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;
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
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
  },
  phone: String,
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const AddressBook = mongoose.model("AddressBook", addressBookSchema);

module.exports = AddressBook;
