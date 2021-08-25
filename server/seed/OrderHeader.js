//
//  Populate database with default data
//
const AddressBook = require("../models/AddressBook");
const OrderHeader = require("../models/OrderHeader");

const orderHeaderData = [
  {
    orderType: "PO",
    orderNumber: 123456,
    customer: 10000,
    description: "Some goodies to receive",
    status: "U",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    orderType: "PO",
    orderNumber: 123457,
    customer: 10000,
    description: "Some more goodies to receive",
    status: "U",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    orderType: "ST",
    orderNumber: 123458,
    customer: 10000,
    description: "Some goodies to transfer",
    status: "U",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    orderType: "SO",
    orderNumber: 123459,
    customer: 10001,
    description: "Some goodies to sell",
    status: "U",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    orderType: "SO",
    orderNumber: 123460,
    customer: 10001,
    description: "Some more goodies to sell",
    status: "U",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
];

const seedOrderHeader = async () => {
  await OrderHeader.deleteMany({});
  //await OrderHeader.insertMany(orderHeaderData);

  for (let i = 0, l = orderHeaderData.length; i < l; i++) {
    const { customer, ...order } = orderHeaderData[i];

    const custId = await AddressBook.findOne({ code: customer });

    await OrderHeader.create({
      ...order,
      customer: custId._id,
    });
  }
};

module.exports = seedOrderHeader;
