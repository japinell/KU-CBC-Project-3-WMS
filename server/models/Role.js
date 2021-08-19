//
//  Role definition
//
const mongoose = require("mongoose");
const { Schema } = mongoose;

//
const roleSchema = new Schema({
  role: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  allowPutaway: {
    type: Boolean,
    default: false,
  },
  allowPicking: {
    type: Boolean,
    default: false,
  },
  allowReplenish: {
    type: Boolean,
    default: false,
  },
  user: String,
  datetime: {
    type: Date,
    default: Date.now(),
  },
});

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
