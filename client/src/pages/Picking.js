import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignUpForm from "../components/SignUpForm";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

import { useMutation, useQuery } from "@apollo/client";

const defaultValues = {
  customerName: "",
  customerAddress: "",
  binLocation: "",
  lotNumber: 0,
  itemNumber: 617950,
  itemName: "",
  UoM: 0,
  quantity: "",
  itemDescription: "",
  itemUpc: 1254600546,
  deliveryMonth: "January",
  deliveryDay: 1,
  deliveryYear: 2021,
};
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6),
  },
}));
const Picking = () => {
  const classes = useStyles();

  const [formValues, setFormValues] = useState(defaultValues);

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
  return (
    <Container className={classes.container} maxWidth="lg">
      <h1>Viewing Picking Form</h1>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item>
            <TextField
              id="name-input"
              name="customerName"
              label="Customer Name"
              type="text"
              value={formValues.customerName}
              onChange={handleInputChange}
            />
            <TextField
              id="name-input"
              name="customerAddress"
              label="Customer Address"
              type="text"
              value={formValues.customerAddress}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="bin-input"
              name="name"
              label="Bin Location"
              type="text"
              value={formValues.binLocation}
              onChange={handleInputChange}
            />

            <TextField
              id="lot-input"
              name="lotNumber"
              label="Lot Number"
              type="number"
              value={formValues.lotNumber}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="itemNumber"
              label="Item Number"
              type="number"
              value={formValues.itemNumber}
              onChange={handleInputChange}
            />
            <TextField
              id="name-input"
              name="itemName"
              label="Item Name"
              type="text"
              value={formValues.itemName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="quantity"
              name="quantity"
              label="Quantity"
              type="number"
              value={formValues.quantity}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="UoM"
              name="UoM"
              label="UoM"
              type="number"
              value={formValues.UoM}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="description-input"
              name="itemDescription"
              label="Description"
              type="text"
              value={formValues.itemDescription}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="upc-input"
              name="itemUpc"
              label="UPC"
              type="text"
              value={formValues.itemUpc}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item>
            <p>Delivery Date:</p>
            <FormControl>
              <Select
                name="Delivery Date"
                value={formValues.deliveryMonth}
                onChange={handleInputChange}
              >
                <MenuItem key="month" value="January">
                  January
                </MenuItem>
                <MenuItem key="month" value="February">
                  February
                </MenuItem>
                <MenuItem key="month" value="March">
                  March
                </MenuItem>
                <MenuItem key="month" value="April">
                  April
                </MenuItem>
                <MenuItem key="month" value="May">
                  May
                </MenuItem>
                <MenuItem key="month" value="June">
                  June
                </MenuItem>
                <MenuItem key="month" value="July">
                  July
                </MenuItem>
                <MenuItem key="month" value="August">
                  August
                </MenuItem>
                <MenuItem key="month" value="September">
                  September
                </MenuItem>
                <MenuItem key="month" value="October">
                  October
                </MenuItem>
                <MenuItem key="month" value="November">
                  November
                </MenuItem>
                <MenuItem key="month" value="December">
                  December
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <Select
                name="Delivery Date"
                value={formValues.deliveryDay}
                onChange={handleInputChange}
              >
                <MenuItem key="day" value="1">
                  1
                </MenuItem>
                <MenuItem key="day" value="2">
                  2
                </MenuItem>
                <MenuItem key="day" value="3">
                  3
                </MenuItem>
                <MenuItem key="day" value="4">
                  4
                </MenuItem>
                <MenuItem key="day" value="5">
                  5
                </MenuItem>
                <MenuItem key="day" value="6">
                  6
                </MenuItem>
                <MenuItem key="day" value="7">
                  7
                </MenuItem>
                <MenuItem key="day" value="8">
                  8
                </MenuItem>
                <MenuItem key="day" value="9">
                  9
                </MenuItem>
                <MenuItem key="day" value="10">
                  10
                </MenuItem>
                <MenuItem key="day" value="11">
                  11
                </MenuItem>
                <MenuItem key="day" value="12">
                  12
                </MenuItem>
                <MenuItem key="day" value="13">
                  13
                </MenuItem>
                <MenuItem key="day" value="14">
                  14
                </MenuItem>
                <MenuItem key="day" value="15">
                  15
                </MenuItem>
                <MenuItem key="day" value="16">
                  16
                </MenuItem>
                <MenuItem key="day" value="17">
                  17
                </MenuItem>
                <MenuItem key="day" value="18">
                  18
                </MenuItem>
                <MenuItem key="day" value="19">
                  19
                </MenuItem>
                <MenuItem key="day" value="20">
                  20
                </MenuItem>
                <MenuItem key="day" value="21">
                  21
                </MenuItem>
                <MenuItem key="day" value="22">
                  22
                </MenuItem>
                <MenuItem key="day" value="23">
                  23
                </MenuItem>
                <MenuItem key="day" value="24">
                  24
                </MenuItem>
                <MenuItem key="day" value="25">
                  25
                </MenuItem>
                <MenuItem key="day" value="26">
                  26
                </MenuItem>
                <MenuItem key="day" value="27">
                  27
                </MenuItem>
                <MenuItem key="day" value="28">
                  28
                </MenuItem>
                <MenuItem key="day" value="29">
                  29
                </MenuItem>
                <MenuItem key="day" value="30">
                  30
                </MenuItem>
                <MenuItem key="day" value="31">
                  31
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <Select
                name="Delivery Date"
                value={formValues.deliveryYear}
                onChange={handleInputChange}
              >
                <MenuItem key="year" value="2021">
                  2021
                </MenuItem>
                <MenuItem key="year" value="2022">
                  2022
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid>
            <div>*</div>
          </Grid>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default Picking;
