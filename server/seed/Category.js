//
//  Populate database with default data
//
const { Category } = require("../models");

const categoryData = [
  {
    category: 10000,
    description: "Category 10000",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    category: 10001,
    description: "Category 10001",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    category: 10002,
    description: "Category 10002",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    category: 10003,
    description: "Category 10003",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    category: 10004,
    description: "Category 10004",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
];

const seedCategory = async () => {
  await Category.deleteMany({});
  await Category.insertMany(categoryData);
};

module.exports = seedCategory;
