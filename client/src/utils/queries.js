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

export const GET_ITEMS = gql`
  query getItems {
    getItems {
      _id
      sku
      description
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
    orders {
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

export const GET_TASKS = gql`
  query getTasks {
    tasks {
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

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;
