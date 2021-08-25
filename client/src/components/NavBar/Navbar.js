import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Tab,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";

import DrawerComponent from "./DrawerComponent/DrawerComponent";
// import { GiBookAura } from "react-icons/gi";
import { MdHome } from "react-icons/md";
import { BiSpreadsheet } from "react-icons/bi";
import { GiCardboardBox } from "react-icons/gi";
import { FiTruck } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { BiBody } from "react-icons/bi";
import { BiTask } from "react-icons/bi";

import Auth from "../../utils/auth";
import LoginForm from "../SignInForm";

const useStyles = makeStyles((theme) => ({
  // logo: {
  //   fontSize: "1.9rem",
  // },
  account: {
    marginLeft: "auto",
    "&:hover": {
      background: "purple",
    },
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  iconLogo: {
    width: "50px",
  },
  icons: {
    fontSize: "2rem",
  },
}));

const Navbar = () => {
  //Hooks
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  //Boolean(anchorEl) This is use to convert a null value in to a boolean
  //anchorEl Is us to set the position of the menu

  const classes = useStyles();

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  // Media query for anything under 920 px to render the hamburger
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  //Functions
  const handleClickTab = (e, newValue) => {
    //The second value contains the current index
    setValue(newValue);
  };

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const renderNavbar = () => {
    return (
      <>
        {matches ? (
          <DrawerComponent />
        ) : (
          <>
            <Tabs
              onChange={handleClickTab}
              className={classes.tabsContainer}
              indicatorColor="secondary"
              value={value}
            >
              <Tab
                component={Link}
                to="/"
                disableRipple
                icon={<img src={require("../../images/homeIcon.png")} />}
                label="Home"
              />
              <Tab
                component={Link}
                to="/admin"
                disableRipple
                icon={<VscAccount className={classes.icons} />}
                label="Profile"
              />
              <Tab
                component={Link}
                to="/tasks"
                disableRipple
                icon={<BiTask className={classes.icons} />}
                label="Tasks"
              />
              <Tab
                component={Link}
                to="/picking"
                disableRipple
                icon={<BiSpreadsheet className={classes.icons} />}
                label="Picking"
              />
              {/* <Tab
                  component={Link}
                  to="/receiving"
                  disableRipple
                  icon={<GiCardboardBox className={classes.icons} />}
                  label="Receiving"
                />

                <Tab
                  component={Link}
                  to="/putaway"
                  disableRipple
                  icon={<BiBody className={classes.icons} />}
                  label="PutAway"
                />

                <Tab
                  component={Link}
                  to="/dispatch"
                  disableRipple
                  icon={<FiTruck className={classes.icons} />}
                  label="Dispatch"
                /> */}
            </Tabs>
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
          </>
        )}
      </>
    );
  };

  return (
    <>
      <Container>
        <AppBar elevation={0} position="fixed" color="primary">
          <Toolbar>
            <Typography>
              {matches ? (
                <a href="/">
                  <img src={require("../../images/homeIcon.png")} />
                </a>
              ) : (
                ""
              )}
            </Typography>
            {renderNavbar()}
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Navbar;
