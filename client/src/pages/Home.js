import video from "../images/wms.mp4";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="video"
          alt="Warehouse"
          min-height="800"
          width="500"
          autoPlay
          src={video}
          title="Warehouse"
        />
      </CardActionArea>
    </Card>
  );
}
