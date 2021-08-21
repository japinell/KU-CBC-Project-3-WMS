import React, { useEffect, useState } from "react";
import Auth from "../utils/auth";
import Picking from "./Picking";
import { GET_TASK } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";

const PickingData = () => {
  const { loading, data } = useQuery(GET_TASK, {
    variables: {
      orderType: "SO",
      orderNumber: 123459,
    },
  });

  if (loading) {
    return <h1>Loading Task Data...</h1>;
  }

  console.log("Data loaded!");
  console.log(data);

  const taskData = data?.getTaskByNumber[0] ?? [];

  const {
    orderType,
    orderNumber,
    user,
    operation,
    priority,
    notes,
    customer,
    items,
  } = taskData;

  const pickingData = {
    orderType,
    orderNumber,
    customerNumber: customer.code,
    customerName: customer.name,
    user,
    operation,
    priority,
    taskDetails: items,
    notes,
  };
  // console.log(pickingData);

  return <Picking defaultValues={pickingData} />;
};

export default PickingData;
