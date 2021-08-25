import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
  Button,
  Tab,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import Auth from "../../../utils/auth";

const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    drawerContainer: {},
    iconButtonContainer: {
      marginLeft: "auto",
      color: "white",
    },

    menuIconToggle: {
      fontSize: "3rem",
    },
  }));

  // for a list item link
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  const [openDrawer, setOpenDrawer] = useState(false);

  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
      >
        <List component="nav">
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItemLink href="/admin">
              <ListItemText primary="Profile" />
            </ListItemLink>
            <ListItemLink href="/tasks">
              <ListItemText primary="Tasks" />
            </ListItemLink>
            <ListItemLink href="/picking">
              <ListItemText primary="Picking" />
            </ListItemLink>
          </List>

          <ListItem button onClick={() => setOpenDrawer(false)}>
            <Button
              onClick={Auth.logout}
              className={classes.account}
              disableElevation
              disableRipple
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          </ListItem>
        </List>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
