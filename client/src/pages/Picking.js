//
//  Libraries needed
//
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import GoBackIcon from "@material-ui/icons/ArrowBackTwoTone";
import AddToCartIcon from "@material-ui/icons/ShoppingCartTwoTone";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useMutation } from "@apollo/client";
import { UPDATE_INVENTORY } from "../utils/mutations";
import { ADD_KARDEX } from "../utils/mutations";
import { UPDATE_ORDER } from "../utils/mutations";
//
//  Use styles to format the component
//
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(12),
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
  button: {
    margin: theme.spacing(1),
  },
}));
//
//  Renders the Picking component with data from the PickingData component
//
const Picking = ({ defaultValues }) => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState(defaultValues);
  const [updateInventory] = useMutation(UPDATE_INVENTORY);
  const [addKardex] = useMutation(ADD_KARDEX);
  //
  //  Handles form changes to controlled elements in the component
  //
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "itemNumber") {
      const selItem = defaultValues.taskDetails.filter((item) => {
        return item.sku === value;
      });
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
  //
  //  Submits data to process the Picking by calling the updateInventory and updateKardex mutations in GraphQL
  //
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
      // Upon success, update the order details
      // updateOrder({
      //   variables: {
      //     orderType: formValues.orderType,
      //     orderNumber: formValues.orderNumber,
      //     status: "P",
      //     sku: formValues.itemNumber,
      //     quantity: formValues.quantity,
      //     user: formValues.user,
      //   },
      // });
    } catch (error) {
      console.log(error);
    }
  };

  //
  //  Centers the Grid component
  //
  function CenterGrid(props) {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        {...props}
      />
    );
  }
  //
  //  Renders the Picking form
  //
  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography
        mt={20}
        variant="h2"
        color="primary"
        className={classes.textCentered}
      >
        Picking
      </Typography>{" "}
      <form onSubmit={handleSubmit}>
        <CenterGrid>
          <TextField
            id="orderType"
            name="orderType"
            label="Order Type"
            type="text"
            InputProps={{
              readOnly: true,
            }}
            value={formValues.orderType}
            onChange={handleInputChange}
          />
          <TextField
            id="orderNumber"
            name="orderNumber"
            label="Order Number"
            type="text"
            InputProps={{
              readOnly: true,
            }}
            value={formValues.orderNumber}
            onChange={handleInputChange}
          />
        </CenterGrid>
        <CenterGrid>
          <TextField
            id="customerNumber"
            name="customerNumber"
            label="Customer Number"
            type="text"
            InputProps={{
              readOnly: true,
            }}
            value={formValues.customerNumber}
            onChange={handleInputChange}
          />
          <TextField
            id="customerName"
            name="customerName"
            label="Customer Name"
            type="text"
            InputProps={{
              readOnly: true,
            }}
            value={formValues.customerName}
            onChange={handleInputChange}
          />
        </CenterGrid>
        <CenterGrid item>
          <FormControl className={classes.formControl}>
            <InputLabel>Item Number</InputLabel>
            <Select
              id="itemNumber"
              name="itemNumber"
              label="Item Number"
              //defaultValue={defaultValues.taskDetails[0].item.sku}
              value={formValues.itemNumber}
              onChange={handleInputChange}
            >
              {defaultValues.taskDetails.map((item) => {
                return (
                  <MenuItem key={item.sku} value={item.sku}>
                    {item.description}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CenterGrid>
        <CenterGrid>
          <TextField
            id="quantity"
            name="quantity"
            label="Quantity"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {formValues.uom}
                </InputAdornment>
              ),
              readOnly: true,
            }}
            value={formValues.quantity}
            onChange={handleInputChange}
          />
        </CenterGrid>
        <CenterGrid>
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
        </CenterGrid>
        <CenterGrid>
          <TextField
            id="lotNumber"
            name="lotNumber"
            label="Lot"
            type="text"
            // InputProps={{
            //   readOnly: true,
            // }}
            value={formValues.lotNumber}
            onChange={handleInputChange}
          />
        </CenterGrid>
        <br />
        <CenterGrid className={classes.textCentered}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            <AddToCartIcon />
            Submit
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            href="/home"
          >
            <GoBackIcon />
            Cancel
          </Button>
        </CenterGrid>
      </form>
    </Container>
  );
};
export default Picking;
