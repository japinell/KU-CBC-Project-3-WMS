//
//  Populate database with default data
//
const mongoose = require("mongoose");
const { Role } = require("../models/Role");

const roleData = [{
        role: 10000,
        description: "Receiving",
        allowPutaway: true,
        allowPicking: false,
        allowReplenish: false,
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    },
    {
        role: 10001,
        description: "Putaway",
        allowPutaway: true,
        allowPicking: false,
        allowReplenish: false,
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    },
    {
        role: 10002,
        description: "Picking",
        allowPutaway: false,
        allowPicking: true,
        allowReplenish: false,
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    },
    {
        role: 10003,
        description: "Replenishment",
        allowPutaway: false,
        allowPicking: false,
        allowReplenish: true,
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    },
    {
        role: 10004,
        description: "Others...",
        user: "admin",
        datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
    }
];

const seedRole = () => {
  await Role.deleteMany({});  
  await Role.bulkCreate(roleData);
} 

module.exports = seedRole;
