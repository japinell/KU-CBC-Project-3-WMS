import React, { useState, useEffect } from "react";
import { Admin } from "Admin"
import { useMutation, useQuery } from "@apollo/client";
import { User } from "../../server/models/User.js"
import { GET_USER } from "../utils/queries";

const AdminData = () => {
  const { loading, data } = useQuery(GET_USER, {
    variables: {
      firstname: "User2",
      department: "Picking",
    },
  });
  
  if (loading) {
    return <h1>Loading Task Data...</h1>;
  }

  const Cards = data?.getUserByNumber[0] ?? [];

  const {
    firstname,
    lastname,
    email,
    
  } = userData;

  const AdminData = {
    firstname,
    lastname,
    email,
  };

  return <Admin defaultValues={userData} />;
};
export default AdminData;