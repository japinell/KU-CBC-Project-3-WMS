import React from "react";
import "../styles/footer.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Box } from "@material-ui/core";

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

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     width: "100%",
//   },
// }));

export default function Footer() {
  // const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit"></Typography>
        </Toolbar>
        <Box mt={3}>
          <Copyright />
        </Box>
      </Container>
    </AppBar>
  );
}
