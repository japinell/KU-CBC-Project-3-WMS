//
//  Libraries needed
//
import React, { useEffect, useState } from "react";
import Picking from "./Picking";
import { useQuery } from "@apollo/client";
import { GET_TASK } from "../utils/queries";
// 
//  PickingData (data concern) - Retrieves the tasks data by calling the GET TASK GraphQL query and passes the result to the Picking component
//
const PickingData = () => {
  const { loading, data } = useQuery(GET_TASK, {
    variables: {
      orderType: "SO",
      orderNumber: 123459,
    },
  });

  // Wait for the query to load the data successfully
  if (loading) {
    return <h1>Loading Task Data...</h1>;
  }

  const taskData = data?.getTaskByNumber[0] ?? [];

  // Retrieves the picking data
  const {
    orderType,
    orderNumber,
    user,
    operation,
    priority,
    notes,
    customer,
    taskDetails,
  } = taskData;

  // Constructs the orderData object used to build the final pickingData to pass to the Picking component
  const orderData = {
    orderType,
    orderNumber,
    customerNumber: customer.code,
    customerName: customer.name,
    user,
    operation,
    priority,
    notes,
    itemNumber: "",
    quantity: 0,
    uom: "",
    fromLocation: "",
    toLocation: "",
    lotNumber: "",
  };

  // Constructs the itemsData object used to build the final pickingData to pass to the Picking component
  const itemsData = {
    orderType,
    orderNumber,
    taskDetails: taskDetails.map((task) => ({
      sku: task.item.sku,
      description: task.item.description,
      quantity: task.quantity,
      uom: task.uom,
      status: task.status,
    })),
  };

  // PickingData contains all the data needed in the Picking component
  const pickingData = { ...orderData, ...itemsData };

  return <Picking defaultValues={pickingData} />;
};

export default PickingData;
