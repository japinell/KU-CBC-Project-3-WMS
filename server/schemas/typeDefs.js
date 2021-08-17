//
//  Type Defs - Define the types of data included in the schemas
//
const {
  gql
} = require("apollo-server-express");

const typeDefs = gql `
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
    user: String!
    datetime: Date!
  }

  type Item {
    itemId: ID!
    description: String!
    categoryId: Category!
    primaryUoM: String
    UPC: String
    restorePoint: Integer
    user: String!
    datetime: Date!
  }

  type Category {
    categoryId: ID!
    description: String!
    user: String!
    datetime: Date!
  }

  type UoM {
    uomId: ID!
    description: String!
    user: String!
    datetime: Date!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
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