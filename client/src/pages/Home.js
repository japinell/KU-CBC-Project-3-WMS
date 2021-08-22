import video from "../images/wms.mp4";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
  textCentered: {
    padding: theme.spacing(12),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container className={classes.container}>
      {matches ? (
        <Typography
          mt={20}
          variant="h5"
          color="primary"
          className={classes.textCentered}
        >
          Warehouse Management System
        </Typography>
      ) : (
        <Typography
          mt={20}
          variant="h3"
          color="primary"
          className={classes.textCentered}
        >
          Warehouse Management System
        </Typography>
      )}

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="video"
            alt="Warehouse"
            min-height="800"
            min-width="800"
            autoPlay
            src={video}
            title="Warehouse"
          />
        </CardActionArea>
      </Card>
    </Container>
  );
}
