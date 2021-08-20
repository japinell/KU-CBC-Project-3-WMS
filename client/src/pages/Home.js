import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { Player, ControlBar } from "video-react";
import video from "../images/wms.mp4";
import "../styles/footer.css";
import ReactPlayer from "react-player";

import Auth from "../utils/auth";

import { useMutation, useQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    paddingTop: "0%",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <h2>Warehouse Management System</h2>
      <Grid>
        <Player
          fluid={false}
          className="player-wrapper"
          autoPlay
          src={video}
          playsInline
          aspectRatio="auto"
        ></Player>
      </Grid>
    </>
  );
};

export default Home;
