//
//  Populate database with sample data
//
const mongoose = require("mongoose");
const { AddressBook } = require("../models/AddressBook");

const addressBookData = [
  {
    number: 10000,
    name: "Customer 10000",
    type: "C",
    address: {
      street: "1450 Jayhawk Blvd",
      city: "Lawrence",
      state: "KS",
      postalCode: "66045",
    },
    phone: [
      {
        type: "work",
        number: "785 864-2700",
      },
    ],
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    number: 10001,
    name: "Customer 10001",
    type: "C",
    address: {
      street: "21 2nd Street",
      city: "New York",
      state: "NY",
      postalCode: "10021",
    },
    phone: [
      {
        type: "work",
        number: "212 555-1234",
      },
      {
        type: "fax",
        number: "646 555-4567",
      },
    ],
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    number: 10003,
    name: "Vendor 10003",
    type: "V",
    address: {
      street: "21 2nd Street",
      city: "New York",
      state: "NY",
      postalCode: "10021",
    },
    phone: [
      {
        type: "work",
        number: "212 555-1234",
      },
      {
        type: "fax",
        number: "646 555-4567",
      },
    ],
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    number: 10004,
    name: "Employee 10004",
    type: "E",
    address: {
      street: "1450 Jayhawk Blvd",
      city: "Lawrence",
      state: "KS",
      postalCode: "66045",
    },
    phone: [
      {
        type: "work",
        number: "785 864-2700",
      },
    ],
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
];

const seedAddressBook = () => {
  await AddressBook.deleteMany({});
  await AddressBook.bulkCreate(addressBookData);
};

module.exports = seedAddressBook;
