import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableSpacing: {
    spacing: theme.spacing(1),
  },
  container: {
    padding: theme.spacing(9),
  },
}));

function createTaskData(
  orderType,
  orderNumber,
  customerName,
  customerNumber,
  customerNotes,
  user
) {
  return {
    orderType,
    orderNumber,
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
      defaultValues[0].orderType,
      defaultValues[0].orderNumber,
      defaultValues[0].customer.name,
      defaultValues[0].customer.code,
      defaultValues[0].notes,
      defaultValues[0].user
    ),
    createTaskData(
      defaultValues[1].orderType,
      defaultValues[1].orderNumber,
      defaultValues[1].customer.name,
      defaultValues[1].customer.code,
      defaultValues[1].notes,
      defaultValues[1].user
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
        <TableHead className={classes.tableSpacing}>
          <TableRow className={classes.tableSpacing}>
            <TableCell>Order Type</TableCell>
            <TableCell>Order Number</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Customer #</TableCell>
            <TableCell>Customer Notes</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className={classes.tableSpacing} key={row.name}>
              <TableCell component="th" scope="row">
                {row.orderType}
              </TableCell>

              <Link href="/picking">
                <TableCell>{row.orderNumber}</TableCell>
              </Link>

              <TableCell>{row.customerName}</TableCell>
              <TableCell>{row.customerNumber}</TableCell>
              <TableCell>{row.customerNotes}</TableCell>
              <TableCell>{row.user}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
// orderType orderNumber UserAssigned Operation Priority ArrayofItems(SKU/Quantity/UoM/Status)
