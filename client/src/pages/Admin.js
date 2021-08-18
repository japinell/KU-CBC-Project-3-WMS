import React, { useState, useEffect } from "react";
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Nav } from "material-ui";
import { User } from "../../../server/models/User";

const Admin = () => {
  if (!isSupervisor)
    return (
      <>
        <Container>
          <h2>Profile</h2>
          <h3>Name Here:</h3>
          <CardColumns>
            <ul>
              <Nav.Link as={Link} to="/receiving">
                <li>Receiving</li>
              </Nav.Link>
              <Nav.Link as={Link} to="/putaway">
                <li>PutAway</li>
              </Nav.Link>
              <Nav.Link as={Link} to="/picking">
                <li>Picking</li>
              </Nav.Link>
              <Nav.Link as={Link} to="/dispatch">
                <li>Dispatch</li>
              </Nav.Link>
            </ul>
          </CardColumns>
        </Container>
      </>
    );
};

export default Admin;
