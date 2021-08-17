//
//  Populate database with default data
//
const mongoose = require("mongoose");
const { OrderHeader } = require('../models/OrderHeader');

const orderHeaderData = [{
        orderType: "PO",
        orderNumber: 123456,
        customer: 10000,
        vendor: 10002,
        description: "Some goodies to receive",
        status: "U",
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    },
    {
        orderType: "PO",
        orderNumber: 123457,
        customer: 10000,
        vendor: 10003,
        description: "Some more goodies to receive",
        status: "U",
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    },
    {
        orderType: "ST",
        orderNumber: 123458,
        customer: 10000,
        vendor: 10000,
        description: "Some goodies to transfer",
        status: "U",
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    },
    {
        orderType: "SO",
        orderNumber: 123459,
        customer: 10001,
        vendor: 10000,
        description: "Some goodies to sell",
        status: "U",
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    },
    {
        orderType: "SO",
        orderNumber: 123460,
        customer: 10001,
        vendor: 10000,
        description: "Some more goodies to sell",
        status: "U",
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    },
];

const seedOrderHeader = () => {
  await OrderHeader.deleteMany({});  
  await OrderHeader.bulkCreate(orderHeaderData);
} 

module.exports = seedOrderHeader;
