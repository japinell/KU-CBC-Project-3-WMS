//
//  Define the functions to retrieve data from the schemas
//
import { gql } from "@apollo/client";

export const GET_ITEM_BY_SKU = gql`
  query getItemBySku($id: ID!) {
    getItemBySku(sku: $sku) {
      _id
      sku
      description
    }
  }
`;

export const GET_INVENTORY_BY_SKU = gql`
  query getInventoryBySku($sku: String!, $location: String, $lot: String) {
    getInventoryBySku(sku: $sku, location: $location, lot: $lot) {
      sku
      location
      lot
      primary
      quantity
    }
  }
`;

export const GET_ITEMS = gql`
  query getItems {
    getItems {
      _id
      sku
      description
    }
  }
`;

export const GET_LOCATION_BY_SKU = gql`
  query getLocationBySku($sku: String!, $location: String, $lot: String) {
    getLocationBySku(sku: $sku, location: $location, lot: $lot) {
      sku
      location
      lot
      primary
      quantity
    }
  }
`;

export const GET_ORDER_BY_NUMBER = gql`
  query getOrderByNumber($orderType: String!, $orderNumber: Int!) {
    getOrderByNumber(orderType: $orderType, orderNumber: $orderNumber) {
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

export const GET_ORDERS = gql`
  query getOrders {
    getOrders {
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

export const GET_TASK = gql`
  query getTaskByNumber($orderType: String!, $orderNumber: Int!) {
    getTaskByNumber(orderType: $orderType, orderNumber: $orderNumber) {
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
      user
      operation
      priority
      notes
      taskDetails {
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

export const GET_TASKS = gql`
  query getTasks {
    getTasks {
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
      user
      operation
      priority
      notes
      taskDetails {
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

export const GET_USER = gql`
  query user {
    firstName
    lastName
    email
    user {
      _id
      email
    }
  }
`;
