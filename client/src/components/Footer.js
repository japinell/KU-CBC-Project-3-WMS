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
import { MdHome } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { BiTask } from "react-icons/bi";
import { BiSpreadsheet } from "react-icons/bi";
import { GiCardboardBox } from "react-icons/gi";
import { BiBody } from "react-icons/bi";
import { FiTruck } from "react-icons/fi";

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
  icons: {
    fontSize: "1.4rem",
  },
}));

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     width: "100%",
//   },
// }));

export default function Footer() {
  const classes = useStyles();
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
        <MdHome
          {...props}
          className={classes.icons}
          color="primary"
          to="/home"
        ></MdHome>
      </Link>
    );
  }
  function ProfileIcon(props) {
    return (
      <Link href="/home">
        <VscAccount
          {...props}
          className={classes.icons}
          color="primary"
          to="/home"
        >
          {" "}
        </VscAccount>
      </Link>
    );
  }
  function TasksIcon(props) {
    return (
      <Link href="/home">
        <BiTask {...props} className={classes.icons} color="primary" to="/home">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </BiTask>
      </Link>
    );
  }
  function PickingIcon(props) {
    return (
      <Link href="/home">
        <BiSpreadsheet
          {...props}
          className={classes.icons}
          color="primary"
          to="/home"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </BiSpreadsheet>
      </Link>
    );
  }
  function ReceivingIcon(props) {
    return (
      <Link href="/home">
        <GiCardboardBox
          {...props}
          className={classes.icons}
          color="primary"
          to="/home"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </GiCardboardBox>
      </Link>
    );
  }
  function PutawayIcon(props) {
    return (
      <Link href="/home">
        <BiBody {...props} className={classes.icons} color="primary" to="/home">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </BiBody>
      </Link>
    );
  }
  function DispatchIcon(props) {
    return (
      <Link href="/home">
        <FiTruck
          {...props}
          className={classes.icons}
          color="primary"
          to="/home"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </FiTruck>
      </Link>
    );
  }

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="md">
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <HomeIcon />
                <ProfileIcon />
                <TasksIcon />
                <PickingIcon />
                <ReceivingIcon />
                <PutawayIcon />
                <DispatchIcon />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h6"
                className={classes.title}
                color="primary"
              >
                Text only
              </Typography>
              <ListItem color="primary">
                <ListItemText primary="this is a list item" />
                <ListItemText />
              </ListItem>
            </Grid>
          </Grid>
        </Box>

        <Box m={2}>
          <Copyright />
        </Box>
      </Container>
    </AppBar>
  );
}
