//
//  Function to retrieve to remove previously saved books from the user account
//
import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "@material-ui/core";

import Auth from "../utils/auth";

import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

const Dispatch = () => {
  return (
    <>
      <Container>
        <h1>Viewing Dispatching Tasks</h1>
      </Container>
    </>
  );
};

export default Dispatch;
