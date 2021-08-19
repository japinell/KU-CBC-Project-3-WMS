//
//  Populate database with sample data
//
const { AddressBook } = require("../models");

const addressBookData = [
  {
    id: 10000,
    name: "Customer 10000",
    type: "C",
    address: {
      street: "1450 Jayhawk Blvd",
      city: "Lawrence",
      state: "KS",
      postalCode: "66045",
    },
    phone: "785 864-2700",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    id: 10001,
    name: "Customer 10001",
    type: "C",
    address: {
      street: "21 2nd Street",
      city: "New York",
      state: "NY",
      postalCode: "10021",
    },
    phone: "212 555-1234",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    id: 10003,
    name: "Vendor 10003",
    type: "V",
    address: {
      street: "21 2nd Street",
      city: "New York",
      state: "NY",
      postalCode: "10021",
    },
    phone: "212 555-1234",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    id: 10004,
    name: "Employee 10004",
    type: "E",
    address: {
      street: "1450 Jayhawk Blvd",
      city: "Lawrence",
      state: "KS",
      postalCode: "66045",
    },
    phone: "785 864-2700",
    user: "admin",
    datetime: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
];

const seedAddressBook = async () => {
  await AddressBook.deleteMany({});
  await AddressBook.insertMany(addressBookData);
};

module.exports = seedAddressBook;
