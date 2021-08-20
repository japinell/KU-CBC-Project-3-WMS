//
//  Define the functions to retrieve data from the schemas
//
import { gql } from "@apollo/client";

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

export const GET_TASKS = gql`
  query getAllTasks {
    tasks {
      id
      orderType
      orderNumber
      user
      operation
      priority
      item {
        id
        quantity
        uom
        status
      }
      note
    }
  }
`;
