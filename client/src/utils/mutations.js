//
//  Define the functions to manipulate the data from the schemas
//
import { gql } from "@apollo/client";

export const UPDATE_INVENTORY = gql`
  mutation updateInventory(
    $item: String!
    $location: String!
    $lot: String!
    $primary: Boolean
    $quantity: Int!
  ) {
    updateInventory(
      item: $item
      location: $location
      lot: $lot
      primary: $primary
      quantity: $quantity
    )
  }
`;

export const ADD_KARDEX = gql`
  mutation addKardex(
    $item: String!
    $location: String!
    $lot: String!
    $quantity: Int!
    $uom: String!
    $operation: String!
    $description: String!
  ) {
    addKardex(
      item: $item
      location: $location
      lot: $lot
      quantity: $quantity
      uom: $uom
      operation: $operation
      description: $description
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
