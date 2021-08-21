//
//  Populate database with default data
//
const { Item, Task } = require("../models");

const taskData = [
  {
    orderType: "SO",
    orderNumber: 123459,
    user: "user1",
    operation: 10000,
    priority: 1,
    items: [
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
    notes: "Hurry up! Premium customer.",
    user: "admin",
  },
  {
    orderType: "SO",
    orderNumber: 123460,
    user: "user1",
    operation: 10000,
    priority: 2,
    items: [
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
    notes: "Take your time...",
    user: "admin",
  },
];

const seedTask = async () => {
  await Task.deleteMany({});

  for (let i = 0, l = taskData.length; i < l; i++) {
    const { items, ...task } = taskData[i];

    const itemIds = await Promise.all(
      items.map(({ sku }) => Item.findOne({ sku }))
    );

    await Task.create({
      ...task,
      items: items.map(({ ...i }, idx) => ({
        ...i,
        item: itemIds[idx]._id,
      })),
    });
  }
};

module.exports = seedTask;
