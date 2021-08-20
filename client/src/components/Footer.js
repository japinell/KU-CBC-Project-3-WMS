import React from "react";
import "../styles/footer.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Box } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/japinell/KU-CBC-Project-3-WMS"
      >
        Mini-WMS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function HomeIcon(props) {
  return (
    <Link href="/home">
      <SvgIcon {...props} color="primary" to="/home">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </Link>
  );
}

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     width: "100%",
//   },
// }));

export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classes.title} color="primary">
              Text only
            </Typography>
            <HomeIcon />
            <ListItem></ListItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classes.title} color="primary">
              Text only
            </Typography>
            <ListItem color="primary">
              <ListItemText primary="this is a list item" />
              <ListItemText />
            </ListItem>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Copyright />
        </Box>
      </Container>
    </AppBar>
  );
}
