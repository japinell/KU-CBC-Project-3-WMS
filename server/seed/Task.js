//
//  Populate database with default data
//
const { AddressBook, Item, Task } = require("../models");

const taskData = [
  {
    orderType: "SO",
    orderNumber: 123459,
    customer: 10001,
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
    customer: 10001,
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
  {
    orderType: "Picking",
    orderNumber: 100150,
    customer: 54785,
    user: "user2",
    operation: 12054,
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
    notes: "Delivery Friday",
    user: "admin",
  },
  {
    orderType: "Picking",
    orderNumber: 103432,
    customer: 23413,
    user: "user2",
    operation: 12054,
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
    notes: "Delivery before 5pm",
    user: "admin",
  },
  {
    orderType: "Picking",
    orderNumber: 567483,
    customer: 19651,
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
    notes: "Customer Will Pick-Up at Will Call",
    user: "admin",
  },
  {
    orderType: "Picking",
    orderNumber: 478799,
    customer: 10549,
    user: "user3",
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
    notes: "Normal Delivery Schedule",
    user: "admin",
  },
];

const seedTask = async () => {
  await Task.deleteMany({});

  for (let i = 0, l = taskData.length; i < l; i++) {
    const { customer, items, ...task } = taskData[i];
    const customerId = await AddressBook.findOne({ code: customer });

    const itemIds = await Promise.all(
      items.map(({ sku }) => Item.findOne({ sku }))
    );

    await Task.create({
      ...task,
      customer: customerId._id,
      items: items.map(({ ...i }, idx) => ({
        ...i,
        item: itemIds[idx]._id,
      })),
    });
  }
};

module.exports = seedTask;
