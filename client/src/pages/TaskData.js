//
//  Libraries needed
//
import React, { useEffect, useState } from "react";
import Auth from "../utils/auth";
import Tasks from "./Tasks";
import { GET_TASKS } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
//
//  TaskData - Retrieves the Tasks data to be passed to the Task component
//
const TaskData = () => {
  const { task } = useParams();
  const { loading, data } = useQuery(GET_TASKS, {
    variables: { task: task },
  });

  // Wait for the data to be retrieved from the GET TASKS GraphQL query
  if (loading) {
    return <h1>Loading Task Data...</h1>;
  }

  const queryTaskData = data?.getTasks ?? [];
  
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
