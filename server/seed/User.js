const { User } = require("../models/User");

const userData = [
  {
    userData: "user1",
    lastName: "user1",
    email: "user1@email.com",
    password: "user1",
  },
  {
    userData: "user2",
    lastName: "user2",
    email: "user2@email.com",
    password: "user2",
  },
  {
    userData: "user3",
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
