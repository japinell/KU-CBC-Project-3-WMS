import React, { useState, useEffect } from "react";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import { Link } from "@material-ui/core/Link";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "../utils/queries";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(9),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    width: 300,
    margin: 'auto',
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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
    <Grid className={classes.container}>
      <CssBaseline />
      <main>
        <div>
          <Container className={classes.container}>
            <Card className={classes.root} variant="outlined" >
              <CardContent>
                <Grid container spacing={6} justifyContent="center">
                  <Typography className={classes.title} color="textPrimary" gutterBottom>
                    Admin Portal
                  </Typography>
                  <form
                    className={classes.root}
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
                      defaultValue="Apply A User"
                      inputProps={{ "aria-label": "description" }}
                      value={formValues.firstName}
                      onChange={handleInputChange}
                    />
                    <Input
                      className={classes.CardContent}
                      defaultValue="Select Action"
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
                    </Button>
                  </CardActions>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </div>
      </main>
    </Grid>
  );
};
export default Admin;
