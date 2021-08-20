//
//  Populate database with default data
//
const { Item, OrderDetail } = require("../models");

const orderDetailData = [
  {
    orderType: "PO",
    orderNumber: 123456,
    items: [
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
  },
  {
    orderType: "PO",
    orderNumber: 123457,
    items: [
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
  },
  {
    orderType: "ST",
    orderNumber: 123458,
    items: [
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
  },
  {
    orderType: "SO",
    orderNumber: 123459,
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
    user: "admin",
  },
  {
    orderType: "SO",
    orderNumber: 123460,
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
    user: "admin",
  },
];

const data = [];

const seedOrderDetail = async () => {
  await OrderDetail.deleteMany({});

  for (let i = 0, l = orderDetailData.length; i < l; i++) {
    const { items, ...order } = orderDetailData[i];

    const itemIds = await Promise.all(
      items.map(({ sku }) => Item.findOne({ sku }))
    );

    await OrderDetail.create({
      ...order,
      items: items.map(({ sku, ...i }, idx) => ({
        ...i,
        item: itemIds[idx]._id,
      })),
    });

    /*
    const { items }= order; 
    console.log(items);
    for (let j = 0, m = item.length; j < m; j++) {
      const searchItem = await Item.findOne({ sku: item[j].sku });
      console.log(searchItem.sku);
      const orderDetail = OrderDetail.insert(...order, { sku: searchItem._id });
    }*/
  }
};

module.exports = seedOrderDetail;
