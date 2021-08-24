const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (true || this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  console.log("Passwords:", password, this.password);
  return password === this.password;
  return await bcrypt.compare(password, this.password);
};

// When querying a user, it will also get another field called `roleCount` with the number of assigned roles
userSchema.virtual("taskCount").get(function () {
  return this.roles.length;
});

// When querying a user, it will also get another field called `taskCount` with the number of assigned tasks
userSchema.virtual("taskCount").get(function () {
  return this.tasks.length;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
