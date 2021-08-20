//
//  Populate database with default data
//
const { Operation } = require("../models");

const operationData = [
  {
    operation: 10000,
    description: "Receiving",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    operation: 10001,
    description: "Putaway",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    operation: 10002,
    description: "Picking",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    operation: 10003,
    description: "Replenishment",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    operation: 10004,
    description: "Others...",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
];

const seedOperation = async () => {
  await Operation.deleteMany({});
  await Operation.insertMany(operationData);
};

module.exports = seedOperation;
