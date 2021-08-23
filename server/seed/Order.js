//
//  Populate database with default data
//
const AddressBook = require("../models/AddressBook");
const Item = require("../models/Item");
const Order = require("../models/Order");

const orderData = [
  {
    orderType: "PO",
    orderNumber: 123456,
    customer: 10000,
    description: "Some goodies to receive",
    status: "U",
    orderDetails: [
      {
        sku: "703250",
        quantity: 100,
        uom: "CS",
        status: "U",
      },
      {
        sku: "617950",
        quantity: 200,
        uom: "JR",
        status: "U",
      },
      {
        sku: "614910",
        quantity: 300,
        uom: "EA",
        status: "U",
      },
      {
        sku: "616265",
        quantity: 400,
        uom: "BAG",
        status: "U",
      },
      {
        sku: "501080",
        quantity: 500,
        uom: "PAK",
        status: "U",
      },
    ],
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    orderType: "PO",
    orderNumber: 123457,
    customer: 10000,
    description: "Some more goodies to receive",
    status: "U",
    orderDetails: [
      {
        sku: "703250",
        quantity: 100,
        uom: "CS",
        status: "U",
      },
      {
        sku: "617950",
        quantity: 200,
        uom: "JR",
        status: "U",
      },
      {
        sku: "614910",
        quantity: 300,
        uom: "EA",
        status: "U",
      },
    ],
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    orderType: "ST",
    orderNumber: 123458,
    customer: 10000,
    description: "Some goodies to transfer",
    status: "U",
    orderDetails: [
      {
        sku: "600190",
        quantity: 100,
        uom: "BX",
        status: "U",
      },
      {
        sku: "600230",
        quantity: 200,
        uom: "BX",
        status: "U",
      },
      {
        sku: "610990",
        quantity: 300,
        uom: "BAG",
        status: "U",
      },
    ],
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    orderType: "SO",
    orderNumber: 123459,
    customer: 10001,
    description: "Some goodies to sell",
    status: "U",
    orderDetails: [
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
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    orderType: "SO",
    orderNumber: 123460,
    customer: 10001,
    description: "Some more goodies to sell",
    status: "U",
    orderDetails: [
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
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
];

const seedOrder = async () => {
  await Order.deleteMany({});

  for (let i = 0, l = orderData.length; i < l; i++) {
    const { customer, orderDetails, ...order } = orderData[i];

    const custId = await AddressBook.findOne({ code: customer });

    const itemIds = await Promise.all(
      orderDetails.map(({ sku }) => Item.findOne({ sku }))
    );

    await Order.create({
      ...order,
      customer: custId._id,
      orderDetails: orderDetails.map(({ ...i }, idx) => ({
        ...i,
        item: itemIds[idx]._id,
      })),
    });
  }
};

module.exports = seedOrder;
