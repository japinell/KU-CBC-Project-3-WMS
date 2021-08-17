//
//  Populate database with default data
//
const mongoose = require("mongoose");
const {
    OrderDetail
} = require('../models/OrderDetail');

const orderDetailData = [{
        orderType: "PO",
        orderNumber: 123456,
        item: [{
                item: "703250",
                quantity: 100,
                uom: "CS",
                status: "U",
            },
            {
                item: "617950",
                quantity: 200,
                uom: "JR",
                status: "U",
            },
            {
                item: "614910",
                quantity: 300,
                uom: "EA",
                status: "U",
            },
            {
                item: "616265",
                quantity: 400,
                uom: "BAG",
                status: "U",
            },
            {
                item: "501080",
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
        item: [{
                item: "703250",
                quantity: 100,
                uom: "CS",
                status: "U",
            },
            {
                item: "617950",
                quantity: 200,
                uom: "JR",
                status: "U",
            },
            {
                item: "614910",
                quantity: 300,
                uom: "EA",
                status: "U",
            },
        ],
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    }, {
        orderType: "ST",
        orderNumber: 123458,
        item: [{
                item: "600190",
                quantity: 100,
                uom: "BX",
                status: "U",
            },
            {
                item: "600230",
                quantity: 200,
                uom: "BX",
                status: "U",
            },
            {
                item: "610990",
                quantity: 300,
                uom: "BAG",
                status: "U",
            },
        ],
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    }, {
        orderType: "SO",
        orderNumber: 123459,
        item: [{
                item: "600190",
                quantity: 100,
                uom: "BX",
                status: "U",
            },
            {
                item: "600230",
                quantity: 100,
                uom: "BX",
                status: "U",
            },
            {
                item: "610990",
                quantity: 100,
                uom: "BAG",
                status: "U",
            },
        ],
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    }, {
        orderType: "SO",
        orderNumber: 123460,
        item: [{
                item: "703250",
                quantity: 100,
                uom: "CS",
                status: "U",
            },
            {
                item: "617950",
                quantity: 100,
                uom: "JR",
                status: "U",
            },
            {
                item: "614910",
                quantity: 100,
                uom: "EA",
                status: "U",
            },
        ],
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    },
];

const seedOrderDetail = () => {
    await OrderDetail.deleteMany({});
    await OrderDetail.bulkCreate(orderDetailData);
}

module.exports = seedOrderDetail;