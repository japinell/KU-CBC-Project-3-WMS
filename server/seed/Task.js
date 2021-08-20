//
//  Populate database with default data
//
const { Task } = require("../models");

const taskData = [
  {
    orderType: "SO",
    orderNumber: 123459,
    user: "user1",
    operation: 10000,
    priority: 1,
    item: [
      {
        sku: "600190",
        quantity: 100,
        uom: "BX",
        status: "U",
      },
      {
        sku: "600230",
        quantity: 100,
        uom: "BX",
        status: "U",
      },
      {
        sku: "610990",
        quantity: 100,
        uom: "BAG",
        status: "U",
      },
    ],
    note: "Hurry up! Premium customer.",
    user: "admin",
  },
  {
    orderType: "SO",
    orderNumber: 123460,
    user: "user1",
    operation: 10000,
    priority: 2,
    item: [
      {
        sku: "703250",
        quantity: 100,
        uom: "CS",
        status: "U",
      },
      {
        sku: "617950",
        quantity: 100,
        uom: "JR",
        status: "U",
      },
      {
        sku: "614910",
        quantity: 100,
        uom: "EA",
        status: "U",
      },
    ],
    note: "Take your time...",
    user: "admin",
  },
];

const seedTask = async () => {
  await Task.deleteMany({});
  await Task.insertMany(taskData);
};

module.exports = seedTask;
