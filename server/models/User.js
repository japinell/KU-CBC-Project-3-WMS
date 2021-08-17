//
//  User definition
//
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//const bookSchema = require('./Book');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    }, 
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    supervisorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },  
    isSupervisor: {
      type: Boolean,
      default: false
    },  
    // 
    roles: [Role],
    tasks: [Task],
    //
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// When querying a user, it will also get another field called `roleCount` with the number of assigned roles
userSchema.virtual("taskCount").get(function () {
  return this.roles.length;
});

// When querying a user, it will also get another field called `taskCount` with the number of assigned tasks
userSchema.virtual("taskCount").get(function () {
  return this.tasks.length;
});

const User = model("User", userSchema);

module.exports = User;
