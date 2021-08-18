//
//  Type Defs - Define the types of data included in the schemas
//
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Location {
    locationId: ID!
    area: String!
    row: String
    bay: String
    level: String
    bin: String
    allowPutaway: Boolean
    allowPicking: Boolean
    allowReplenish: Boolean
  }

  type Item {
    itemId: ID!
    description: String!
    categoryId: Category!
    primaryUoM: String
    UPC: String
    restorePoint: Int
  }

  type Category {
    categoryId: ID!
    description: String!
  }

  type UoM {
    uomId: ID!
    description: String!
  }

  type Conversion {
    conversionId: ID!
    item: String!
    uomFrom: String!
    uomTo: String!
    factor: Int!
  }

  type Kardex {
    kardexId: ID!
    item: Item!
    locationId: Location!
    lot: String!
    quantity: Int!
    uomId: UoM!
    operationId: Operation!
    description: String
  }

  type Operation {
    operationId: ID!
    operation: String!
    description: String!
  }

  type Task {
    taskId: ID!
    user: String!
    status: String!
    operationId: Operation!
  }

  type OrderHeader {
    orderId: ID!
    orderType: String!
    orderNumber: Int!
    customerId: AddressBook!
    vendorId: AddressBook!
    description: String!
    status: String!
  }

  type OrderDetail {
    orderId: ID!
    orderType: String!
    orderNumber: Int!
    itemId: Item!
    description: String!
    status: String!
    quantity: Int!
    uom: UoM!
  }

  type AddressBook {
    id: ID!
    name: String!
    type: String!
    address: [String]
    phone: [String]
  }

  type Inventory {
    itemId: ID!
    location: String!
    lot: String
    primary: Boolean!
    quantity: Int!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Role {
    roleId: ID!
    role: String!
    description: String!
    allowPutaway: Boolean!
    allowPicking: Boolean!
    allowReplenish: Boolean!
  }

  type Book {
    bookId: ID!
    authors: [String]
    title: String!
    description: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    bookId: String!
    authors: [String]
    title: String!
    description: String!
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
