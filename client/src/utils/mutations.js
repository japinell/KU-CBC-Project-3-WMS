//
//  Define the functions to manipulate the data from the schemas
//
import { gql } from "@apollo/client";

export const UPDATE_INVENTORY = gql`
  mutation updateInventory(
    $sku: String!
    $location: String!
    $lot: String!
    $quantity: Int!
    $user: String
  ) {
    updateInventory(
      sku: $sku
      location: $location
      lot: $lot
      quantity: $quantity
      user: $user
    ) {
      sku
      location
      lot
      quantity
    }
  }
`;

export const ADD_KARDEX = gql`
  mutation addKardex(
    $sku: String!
    $location: String!
    $lot: String!
    $quantity: Int!
    $uom: String!
    $operation: String!
    $description: String!
    $user: String
  ) {
    addKardex(
      sku: $sku
      location: $location
      lot: $lot
      quantity: $quantity
      uom: $uom
      operation: $operation
      description: $description
      user: $user
    ) {
      sku
      location
      lot
      quantity
      uom
      operation
      description
      user
      datetime
    }
  }
`;

export const UPDATE_ORDER = gql`
  mutation updateOrder(
    $orderType: String!
    $orderNumber: Int!
    $status: String!
    $sku: String!
    $quantity: Int!
    $user: String
  ) {
    updateOrder(
      orderType: $orderType
      orderNumber: $orderNumber
      status: $status
      sku: $sku
      quantity: $quantity
      user: $user
    ) {
      id
      orderType
      orderNumber
      customer {
        _id
        code
        name
        address {
          street
          city
          state
          postalCode
        }
        phone
      }
      description
      status
      items {
        item {
          _id
          sku
          description
        }
        quantity
        uom
        status
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;
