import React, { useState, useEffect } from "react";
import { Admin } from "Admin";
import { useMutation, useQuery } from "@apollo/client";
import { User } from "../../server/models/User.js";
import { GET_USER } from "../utils/queries";

const AdminData = () => {
  const { loading, data } = useQuery(GET_USER, {
    variables: {
      user: "User2",
      operation: "Picking",
    },
  });

  const userData = data?.getUserByNumber[0] ?? [];

  const { firstname, lastname, email } = userData;

  const User = {
    firstname,
    lastname,
    email,
  };

  if (loading) {
    return <h1>Loading Task Data...</h1>;
  }

  return <Admin defaultValues={userData} />;
};
export default AdminData;