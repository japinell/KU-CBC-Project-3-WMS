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
    $uom: String!
    $operation: String!
    $description: String!
    $user: String
  ) {
    updateInventory(
      sku: $sku
      location: $location
      lot: $lot
      quantity: $quantity
      uom: $uom
      operation: $operation
      description: $description
      user: $user
    )
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
    )
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
