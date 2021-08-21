import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { LOGIN_USER } from "../utils/mutations";
import { GET_TASK } from "../utils/queries";

import Auth from "../utils/auth";

import { useMutation, useQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6),
  },
  formControl: {
    textAlign: theme.left,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Picking = () => {
  const classes = useStyles();

  const [formValues, setFormValues] = useState(defaultValues);
  // const [formValues, setFormValues] = useState({});
  const { loading, data } = useQuery(GET_TASK, {
    variables: {
      orderType: "SO",
      orderNumber: 123459,
    },
  });
  const taskData = data?.getTaskByNumber[0] ?? [];

  // If data isn't here yet, wait for it
  if (loading) {
    return <h2>LOADING TASKS...</h2>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  // console.log(taskData);
  const { orderType, orderNumber, user, operation, priority, customer, items } =
    taskData;

  const defaultValues = {
    orderType,
    orderNumber,
    customerNumber: customer.code,
    customerName: customer.name,
    user,
    operation,
    priority,
    items: { ...items },
    notes: "Hurry up! Premium customer.",
  };
  console.log(defaultValues);
  setFormValues(defaultValues);
  // setFormValues({
  //   orderType,
  //   orderNumber,
  //   customerNumber: customer.code,
  //   customerName: customer.name,
  //   user,
  //   operation,
  //   priority,
  //   items: { ...items },
  //   notes: "Hurry up! Premium customer.",
  // });

  return (
    <Container className={classes.container} maxWidth="lg">
      <h1>Picking</h1>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid>
            <TextField
              id="orderType"
              name="orderType"
              label="Order Type"
              type="text"
              value={formValues.orderType}
              onChange={handleInputChange}
            />
            <TextField
              id="orderNumber"
              name="orderNumber"
              label="Order Number"
              type="text"
              value={formValues.orderNumber}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="customerNumber"
              name="customerNumber"
              label="Customer Number"
              type="text"
              value={formValues.customerNumber}
              onChange={handleInputChange}
            />
            <TextField
              id="customerName"
              name="customerName"
              label="Customer Name"
              type="text"
              value={formValues.customerName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Item Number</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={defaultValues.item[0].id}
                value={formValues.itemNumber}
                onChange={handleInputChange}
              >
                {defaultValues.item.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.description}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid>
            <TextField
              id="fromLocation"
              name="fromLocation"
              label="From Location"
              type="text"
              value={formValues.fromLocation}
              onChange={handleInputChange}
            />
            <TextField
              id="toLocation"
              name="toLocation"
              label="To Location"
              type="text"
              value={formValues.toLocation}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="lotNumber"
              name="lotNumber"
              label="Lot"
              type="text"
              value={formValues.lotNumber}
              onChange={handleInputChange}
            />
            <TextField
              id="expirationDate"
              name="expirationDate"
              label="Expiration Date"
              type="text"
              value={formValues.expirationDate}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="UoM"
              name="UoM"
              label="UoM"
              type="text"
              value={formValues.UoM}
              onChange={handleInputChange}
            />
            <TextField
              id="quantity"
              name="quantity"
              label="Quantity"
              type="number"
              value={formValues.quantity}
              onChange={handleInputChange}
            >
              {defaultValues.item.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.id}>
                    {item.description}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
        </Grid>
        <Grid>
          <TextField
            id="fromLocation"
            name="fromLocation"
            label="From Location"
            type="text"
            value={formValues.fromLocation}
            onChange={handleInputChange}
          />
          <TextField
            id="toLocation"
            name="toLocation"
            label="To Location"
            type="text"
            value={formValues.toLocation}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid>
          <TextField
            id="lotNumber"
            name="lotNumber"
            label="Lot"
            type="text"
            value={formValues.lotNumber}
            onChange={handleInputChange}
          />
          <TextField
            id="expirationDate"
            name="expirationDate"
            label="Expiration Date"
            type="text"
            value={formValues.expirationDate}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid>
          <TextField
            id="UoM"
            name="UoM"
            label="UoM"
            type="text"
            value={formValues.UoM}
            onChange={handleInputChange}
          />
          <TextField
            id="quantity"
            name="quantity"
            label="Quantity"
            type="number"
            value={formValues.quantity}
            onChange={handleInputChange}
          />
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Picking;
