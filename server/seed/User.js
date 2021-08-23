const User = require("../models/User");
const bcrypt = require("bcrypt");

const userData = [
  {
    userData: "user1",
    firstName: "John",
    lastName: "user1",
    email: "user1@email.com",
    password: "user1",
  },
  {
    userData: "user2",
    firstName: "Jane",
    lastName: "user2",
    email: "user2@email.com",
    password: "user2",
  },
  {
    userData: "user3",
    firstName: "Tom",
    lastName: "user3",
    email: "user3@email.com",
    password: "user3",
  },
];
const seedUser = async () => {
  await User.deleteMany({});
  await User.insertMany(userData);
};
module.exports = seedUser;
