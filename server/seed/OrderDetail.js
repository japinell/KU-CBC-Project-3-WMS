//
//  Populate database with default data
//
const { OrderHeader, OrderDetail, Item } = require("../models");

const orderDetailData = [
  {
    orderType: "PO",
    orderNumber: 123456,
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

const seedOrderDetail = async () => {
  await OrderDetail.deleteMany({});

  for (let i = 0, l = orderDetailData.length; i < l; i++) {
    const { orderType, orderNumber, orderDetails, ...order } =
      orderDetailData[i];

    const orderId = await OrderHeader.findOne({ orderType, orderNumber });

    const itemIds = await Promise.all(
      orderDetails.map(({ sku }) => Item.findOne({ sku }))
    );

    await OrderDetail.create({
      orderNumber: orderId,
      orderDetails: orderDetails.map(({ ...i }, idx) => ({
        ...i,
        item: itemIds[idx]._id,
      })),
    });
  }
};

module.exports = seedOrderDetail;
