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

const Admin = () => {
  return (
    <Grid maxWidth="lg">
      <h2>Header</h2>
    </Grid>
  );
};
export default Admin;
