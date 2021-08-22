import React, { useContext, useEffect, useState } from "react";
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
import { UPDATE_INVENTORY } from "../utils/mutations";
import { ADD_KARDEX } from "../utils/mutations";

import Auth from "../utils/auth";

import { useMutation, useQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6),
  },
  formControl: {
    textAlign: theme.left,
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textCentered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Picking = ({ defaultValues }) => {
  console.log(defaultValues);
  const classes = useStyles();
  const [formValues, setFormValues] = useState(defaultValues);
  const [updateInventory, { errUpdateInventory }] =
    useMutation(UPDATE_INVENTORY);
  const [addKardex, { errAddKardex }] = useMutation(ADD_KARDEX);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Target => ", e.target);
    console.log("Value => ", value);

    if (name === "itemNumber") {
      const selItem = defaultValues.taskItemDetails.filter((elem) => {
        return elem.item.sku === value;
      });
      console.log(selItem);

      setFormValues({
        ...formValues,
        itemNumber: value,
        uom: selItem[0].uom,
        quantity: selItem[0].quantity,
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);

    //  Update the inventory by calling the updateInventory mutation
    try {
      updateInventory({
        variables: {
          sku: formValues.itemNumber,
          location: formValues.fromLocation,
          lot: formValues.lotNumber,
          quantity: formValues.quantity,
          user: formValues.user,
        },
      });

      // Upon success, log the transaction to the kardex
      addKardex({
        variables: {
          sku: formValues.itemNumber,
          location: formValues.fromLocation,
          lot: formValues.lotNumber,
          quantity: formValues.quantity,
          uom: formValues.uom,
          operation: "Picking",
          //description: `Picked item from ${formValues.fromLocation} to ${formValues.toLocation}`,
          description: formValues.notes
            ? formValues.notes
            : `Picked item from ${formValues.fromLocation} to ${formValues.toLocation}`,
          user: formValues.user,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   setFormValues(defaultValues);
  //   console.log("formValues => ");
  //   console.log(formValues);
  //   console.log("formValues.items => ");
  //   console.log(formValues.taskItemDetails);
  // }, []);

  console.log("Form values => ", formValues);

  return (
    <Container className={classes.container} maxWidth="lg">
      <h1 className={classes.textCentered}>Picking</h1>
      <form onSubmit={handleSubmit}>
        <Grid>
          <TextField
            id="orderType"
            name="orderType"
            label="Order Type"
            type="text"
            value={formValues.orderType}
            onChange={handleInputChange}
            disabled
          />
          <TextField
            id="orderNumber"
            name="orderNumber"
            label="Order Number"
            type="text"
            value={formValues.orderNumber}
            onChange={handleInputChange}
            disabled
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
            disabled
          />
          <TextField
            id="customerName"
            name="customerName"
            label="Customer Name"
            type="text"
            value={formValues.customerName}
            onChange={handleInputChange}
            disabled
          />
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel>Item Number</InputLabel>
            <Select
              id="itemNumber"
              name="itemNumber"
              label="Item Number"
              // defaultValue={defaultValues.taskItemDetails[0].item.sku}
              value={formValues.itemNumber}
              onChange={handleInputChange}
            >
              {defaultValues.taskItemDetails.map(({ item }) => {
                return (
                  <MenuItem key={item.sku} value={item.sku}>
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
            disabled
          />
        </Grid>
        <Grid>
          <TextField
            id="uom"
            name="uom"
            label="UoM"
            type="text"
            value={formValues.uom}
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
        <br />
        <Grid className={classes.textCentered}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Button variant="contained" color="primary" href="/home">
            Cancel
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default Picking;
