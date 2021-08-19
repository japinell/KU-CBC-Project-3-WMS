import React, { useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { User } from "../../../server/models/User";
import { Task } from "../../../server/models/Task";

const useStyles = makeStyles((theme) => ({
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [];

function renderComponent() {
  for (const [i, firstName] of firstName.entries()) {
    cards.push(<li>{firstName}</li>)
    
    return (
      <div>
        {cards}
      </div>
    )
export default function Album() {
  const classes = useStyles();
  
  const Admin = () => {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
              <BusinessCenterIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
              Mini-WMS
            </Typography>
            <Typeography variant="h6" align="right" color="inhert" noWrap>
              Admin Portal
            </Typeography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
        <Container>
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container spacing={2} justifyContent="center">
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {User.firstName}
            </Typography>
              <FormControl>
                <form className={classes.root} noValidate autoComplete="off">
                  <Typography className={classes.pos} color="textSecondary" variant="body2" component="p">
                    Assign New Task
                    </Typography>
                    <Input placeholder="Select Employee" inputProps={{ 'aria-label': 'description' }} />
                      <Input defaultValue="Select Action" inputProps={{ 'aria-label': 'description' }} />
                    </form>
                    <Button variant="contained" color="primary">
                    Apply
                  </Button>
                 </FormControl>
                </Grid>
                </CardContent>
               </Card>
              </Container>
             </div>
           </main>
        </React.Fragment>
      );
    }
    export default Admin;
  }
}
};