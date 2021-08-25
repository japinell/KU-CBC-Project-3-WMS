//
//  Populate database with default data
//
const { Role } = require("../models");

const roleData = [
  {
    role: 10000,
    description: "Receiving",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    role: 10001,
    description: "Putaway",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    role: 10002,
    description: "Picking",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    role: 10003,
    description: "Replenishment",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    role: 10004,
    description: "Others...",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
];

const seedRole = async () => {
  await Role.deleteMany({});
  await Role.insertMany(roleData);
};

module.exports = seedRole;
