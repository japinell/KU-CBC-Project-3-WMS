import React, { useState, useEffect } from "react";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6),
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

const [formValues, setFormValues] = useState(defaultValues);

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

const cards = [];

const renderCards = () => {
  for (const [i, userData] of userData.entries()) {
    cards.push(<li>{userData}</li>);

    return <div>{cards}</div>;
  }
};

renderCards();

const Admin = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div>
          <Container className={classes.container} maxWidth="lg">
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Grid container spacing={6} justifyContent="center">
                  <Typography className={classes.title} color="textPrimary" gutterBottom>
                    Admin Portal
                  </Typography>
                  <FormControl>
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
                        placeholder="Apply A User"
                        inputProps={{ "aria-label": "description" }}
                        value={formValues.username}
                        onChange={handleInputChange}
                      />
                      <Input
                        className={classes.CardContent}
                        defaultValue="Select Action"
                        inputProps={{ "aria-label": "description" }}
                        value={formValues.department}
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
                  </FormControl>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
};
export default Admin;
