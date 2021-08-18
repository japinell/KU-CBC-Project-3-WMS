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
} from "react-bootstrap";

import Auth from "../utils/auth";
import { removeBookId } from "../utils/localStorage";

import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { REMOVE_BOOK } from "../utils/mutations";

const PutAway = () => {
  return (
    <>
      <Container>
        <h1>Viewing PutAway Tasks</h1>
      </Container>
    </>
  );
};

export default PutAway;
