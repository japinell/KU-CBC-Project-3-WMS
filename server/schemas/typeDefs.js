//
//  Type Defs - Define the types of data included in the schemas
//
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type AddressBook {
    _id: ID!
    code: Int!
    name: String!
    type: String!
    address: PostalAddress
    phone: String
  }

  type PostalAddress {
    street: String
    city: String
    state: String
    postalCode: String
  }

  type Category {
    id: ID!
    description: String!
  }

  type Conversion {
    id: ID!
    item: String!
    uomFrom: String!
    uomTo: String!
    factor: Int!
  }

  type Inventory {
    id: ID!
    sku: String!
    description: String!
    location: String!
    lot: String
    primary: Boolean!
    quantity: Int!
  }

  type Item {
    _id: ID!
    sku: String!
    description: String!
    upc: String!
    category: String!
    primaryUom: String
    restorePoint: Int
  }

  type Kardex {
    id: ID!
    sku: String!
    location: String!
    lot: String!
    quantity: Int!
    uom: String!
    operation: String!
    description: String
    user: String
    datetime: String
  }

  type Location {
    id: ID!
    location: String!
    area: String!
    row: String
    bay: String
    level: String
    bin: String
    allowPutaway: Boolean
    allowPicking: Boolean
    allowReplenish: Boolean
  }

  type Operation {
    id: ID!
    operation: String!
    description: String!
  }

  type Order {
    id: String!
    orderType: String!
    orderNumber: Int!
    customer: AddressBook!
    description: String!
    status: String!
    orderDetails: [OrderItem]
  }

  type OrderHeader {
    id: ID!
    orderType: String!
    orderNumber: Int!
    customer: AddressBook!
    description: String!
    status: String!
  }

  type OrderItem {
    item: Item!
    sku: String!
    quantity: Int!
    uom: String!
    status: String!
  }

  type OrderDetail {
    id: ID!
    orderNumber: OrderHeader!
    orderDetails: [OrderItem]
  }

  type Role {
    id: ID!
    role: String!
    description: String!
  }

  type Task {
    id: String!
    orderType: String!
    orderNumber: String!
    customer: AddressBook!
    user: String!
    operation: Int!
    priority: Int!
    taskDetails: [OrderItem]
    notes: String
  }

  type UoM {
    id: ID!
    uom: String!
    description: String!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getItemBySku(sku: String!): [Item]
  }

  type Query {
    getInventoryBySku(sku: String!, location: String, lot: String): [Inventory]
  }

  type Query {
    getItems: [Item]
  }

  type Query {
    getLocationBySku(sku: String!): [Inventory]
  }

  type Query {
    getOrderByNumber(orderType: String!, orderNumber: Int!): [Order]
  }

  type Query {
    getOrders: [Order]
  }

  type Query {
    getTaskByNumber(orderType: String!, orderNumber: Int!): [Task]
  }

  type Query {
    getTasks: [Task]
  }

  type Query {
    user: User
  }

  type Mutation {
    updateInventory(
      sku: String!
      location: String!
      lot: String!
      quantity: Int!
      user: String
    ): Inventory
  }

  type Mutation {
    updateOrder(
      orderType: String!
      orderNumber: Int!
      status: String!
      sku: String!
      quantity: Int!
      user: String
    ): Order
  }

  type Mutation {
    addKardex(
      sku: String!
      location: String!
      lot: String!
      quantity: Int!
      uom: String!
      operation: String!
      description: String!
      user: String
    ): Kardex
  }

  type Mutation {
    addUser(
      email: String!
      firstName: String!
      lastName: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
