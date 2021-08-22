import React, { useEffect, useState } from "react";
import Auth from "../utils/auth";
import Tasks from "./Tasks";
import { GET_TASKS } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";

const TaskData = () => {
  const { loading, data } = useQuery(GET_TASKS, {});

  if (loading) {
    return <h1>Loading Task Data...</h1>;
  }

  console.log("Data loaded!");
  console.log(data);

  const queryTaskData = data?.getTasks ?? [];
  console.log(queryTaskData);
  const {
    orderType,
    orderNumber,
    user,
    operation,
    priority,
    notes,
    customer,
    items,
  } = queryTaskData;

  return <Tasks defaultValues={queryTaskData} />;
};

export default TaskData;