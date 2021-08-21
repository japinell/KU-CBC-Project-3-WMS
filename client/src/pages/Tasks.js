import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  container: {
    padding: theme.spacing(9),
  },
}));

function createTaskData(
  orderType,
  orderName,
  customerName,
  customerNumber,
  customerNotes,
  user
) {
  return {
    orderType,
    orderName,
    customerName,
    customerNumber,
    customerNotes,
    user,
  };
}

export default function Tasks({ defaultValues }) {
  console.log("Default Values for Tasks:", defaultValues);
  const classes = useStyles();
  const [formValues, setFormValues] = useState(defaultValues);
  const rows = [
    createTaskData(
      defaultValues.orderType,
      defaultValues.orderNumber,
      defaultValues.customerName,
      defaultValues.customerNumber,
      defaultValues.notes,
      defaultValues.user
    ),
    createTaskData(
      defaultValues.orderType,
      defaultValues.orderNumber,
      defaultValues.customerName,
      defaultValues.customerNumber,
      defaultValues.notes,
      defaultValues.user
    ),
    createTaskData(
      defaultValues.orderType,
      defaultValues.orderNumber,
      defaultValues.customerName,
      defaultValues.customerNumber,
      defaultValues.notes,
      defaultValues.user
    ),
    createTaskData(
      defaultValues.orderType,
      defaultValues.orderNumber,
      defaultValues.customerName,
      defaultValues.customerNumber,
      defaultValues.notes,
      defaultValues.user
    ),
    createTaskData(
      defaultValues.orderType,
      defaultValues.orderNumber,
      defaultValues.customerName,
      defaultValues.customerNumber,
      defaultValues.notes,
      defaultValues.user
    ),
  ];

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Order Type</TableCell>
            <TableCell align="right">Order Number</TableCell>
            <TableCell align="right">Customer Name</TableCell>
            <TableCell align="right">Customer #</TableCell>
            <TableCell align="right">Customer Notes</TableCell>
            <TableCell align="right">User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.orderType}
              </TableCell>
              <TableCell align="right">{row.orderName}</TableCell>
              <TableCell align="right">{row.customerName}</TableCell>
              <TableCell align="right">{row.customerNumber}</TableCell>
              <TableCell align="right">{row.customerNotes}</TableCell>
              <TableCell align="right">{row.user}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
// orderType orderNumber UserAssigned Operation Priority ArrayofItems(SKU/Quantity/UoM/Status)
