import React, { useState } from "react";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  root: {
    margin: 25,
  },

  cardContent: {
    margin: 1,
    justifyContent: "center",
  },

  pos: {
    marginBottom: 12,
  },
  textCentered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

// const { userData } = require("../models/User.js");

const Admin = () => {
  const [formValues, setFormValues] = useState({});
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  // const handleSliderChange = (name) => (e, value) => {
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <Container className={classes.container}>
      <Typography
        mt={20}
        variant="h2"
        color="primary"
        className={classes.textCentered}
      >
        Admin Portal
      </Typography>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container spacing={6} justifyContent="center">
            <form
              className={classes.root}
              justifyContent="center"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Typography
                className={classes.pos}
                color="textSecondary"
                variant="body2"
                component="p"
              >
                Assign New Task
              </Typography>
              <Input
                className={classes.CardContent}
                placeholder="Apply A User"
                inputProps={{ "aria-label": "description" }}
                value={formValues.user}
                onChange={handleInputChange}
              />
              <Input
                className={classes.CardContent}
                placeholder="Select Action"
                inputProps={{ "aria-label": "description" }}
                value={formValues.operation}
                onChange={handleInputChange}
              />
            </form>
            <CardActions>
              <Button
                className={classes.heroButtons}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
                <Link
                  to={{
                    pathname: `/tasks`,
                  }}
                />
              </Button>
            </CardActions>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
export default Admin;
