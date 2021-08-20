//
//  Type Defs - Define the types of data included in the schemas
//
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type AddressBook {
    id: ID!
    name: String!
    type: String!
    address: PostalAddress
    phone: [String]
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
    item: String!
    description: String!
    location: String!
    lot: String
    primary: Boolean!
    quantity: Int!
  }

  type Item {
    id: ID!
    item: String!
    description: String!
    upc: String!
    primaryUom: String
  }

  type Kardex {
    id: ID!
    item: Item!
    location: Location!
    lot: String!
    quantity: Int!
    uom: UoM!
    operation: Operation!
    description: String
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

  type OrderHeader {
    id: ID!
    orderType: String!
    orderNumber: Int!
    customer: AddressBook!
    vendor: AddressBook!
    description: String!
    status: String!
  }

  type OrderItem {
    item: String!
    quantity: Int!
    uom: String!
    status: String!
  }

  type OrderDetail {
    id: ID!
    orderType: String!
    orderNumber: Int!
    item: [OrderItem]
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
    user: String!
    operation: Int!
    priority: Int!
    items: [OrderDetail]
    note: String
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
    user: User
  }

  type Query {
    tasks: [Task]
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
