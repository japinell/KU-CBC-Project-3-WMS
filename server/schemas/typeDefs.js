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
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Role {
    roleId: ID!
    role: String!
    description: String!
    allowPutaway: Boolean!
    allowPicking: Boolean!
    allowReplenish: Boolean!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
