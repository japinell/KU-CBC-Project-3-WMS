//
//  Populate database with default data
//
const { AddressBook, Item, Task } = require("../models");

const taskData = [
  {
    orderType: "SO",
    orderNumber: 123459,
    customer: 10000,
    user: "user1",
    operation: 10000,
    priority: 1,
    taskDetails: [
      {
        sku: "600190",
        quantity: 100,
        uom: "BX",
        status: "U",
      },
      {
        sku: "600230",
        quantity: 50,
        uom: "BX",
        status: "U",
      },
      {
        sku: "610990",
        quantity: 25,
        uom: "BAG",
        status: "U",
      },
    ],
    notes: "Hurry up! Premium customer.",
    user: "admin",
  },
  {
    orderType: "SO",
    orderNumber: 123460,
    customer: 10001,
    user: "user1",
    operation: 10000,
    priority: 2,
    taskDetails: [
      {
        sku: "703250",
        quantity: 100,
        uom: "CS",
        status: "U",
      },
      {
        sku: "617950",
        quantity: 50,
        uom: "JR",
        status: "U",
      },
      {
        sku: "614910",
        quantity: 25,
        uom: "EA",
        status: "U",
      },
    ],
    notes: "Take your time...",
    user: "admin",
  },
  {
    orderType: "Receiving",
    orderNumber: 200201,
    customer: 10003,
    user: "user4",
    operation: 10000,
    priority: 1,
    taskDetails: [
      {
        sku: "600190",
        quantity: 100,
        uom: "BX",
        status: "U",
      },
      {
        sku: "600230",
        quantity: 50,
        uom: "BX",
        status: "U",
      },
      {
        sku: "610990",
        quantity: 25,
        uom: "BAG",
        status: "U",
      },
    ],
    notes: "Delivery from US Foods Today at 2pm",
    user: "admin",
  },
  {
    orderType: "Picking",
    orderNumber: 201331,
    customer: 10004,
    user: "user3",
    operation: 10000,
    priority: 2,
    taskDetails: [
      {
        sku: "703250",
        quantity: 100,
        uom: "CS",
        status: "U",
      },
      {
        sku: "617950",
        quantity: 50,
        uom: "JR",
        status: "U",
      },
      {
        sku: "614910",
        quantity: 25,
        uom: "EA",
        status: "U",
      },
    ],
    notes: "Please deliver by 5pm TODAY!",
    user: "admin",
  },
  {
    orderType: "Picking",
    orderNumber: 300150,
    customer: 10004,
    user: "user2",
    operation: 10000,
    priority: 2,
    taskDetails: [
      {
        sku: "703250",
        quantity: 100,
        uom: "CS",
        status: "U",
      },
      {
        sku: "617950",
        quantity: 50,
        uom: "JR",
        status: "U",
      },
      {
        sku: "614910",
        quantity: 25,
        uom: "EA",
        status: "U",
      },
    ],
    notes: "Normal Schedule",
    user: "admin",
  },
];

const seedTask = async () => {
  await Task.deleteMany({});

  for (let i = 0, l = taskData.length; i < l; i++) {
    const { customer, taskDetails, ...task } = taskData[i];
    const custId = await AddressBook.findOne({ code: customer });

    const itemIds = await Promise.all(
      taskDetails.map(({ sku }) => Item.findOne({ sku }))
    );

    await Task.create({
      ...task,
      customer: custId._id,
      taskDetails: taskDetails.map(({ ...i }, idx) => ({
        ...i,
        item: itemIds[idx]._id,
      })),
    });
  }
};

module.exports = seedTask;
