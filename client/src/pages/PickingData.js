import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Auth from "../utils/auth";
import Picking from "./Picking";
import { GET_TASK } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

const PickingData = () => {
  const { parOrderType, parOrderNumber } = useParams();
  const { loading, data } = useQuery(GET_TASK, {
    variables: {
      parOrderType,
      parOrderNumber,
    },
  });

  console.log("orderType =>", orderType);
  console.log("orderNumber =>", orderNumber);

  if (loading) {
    return <h1>Loading Task Data...</h1>;
  }

  const taskData = data?.getTaskByNumber[0] ?? [];

  const {
    // orderType,
    // orderNumber,
    user,
    operation,
    priority,
    notes,
    customer,
    taskDetails,
  } = taskData;

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

  const pickingData = { ...orderData, ...itemsData };

  return <Picking defaultValues={pickingData} />;
};

export default PickingData;
