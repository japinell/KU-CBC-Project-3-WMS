//
//  Functions to call the search API and execute the mutations to save data to the MongoDb database
//
import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

import Auth from "../utils/auth";
import { searchGoogleBooks } from "../utils/API";
import { saveBookIds, getSavedBookIds } from "../utils/localStorage";

import { useMutation } from "@apollo/client";
import { SAVE_BOOK } from "../utils/mutations";

const Home = () => {
  return (
    <>
      <Container>
        <h2>Warehouse Management System</h2>
      </Container>
    </>
  );
};

export default Home;
