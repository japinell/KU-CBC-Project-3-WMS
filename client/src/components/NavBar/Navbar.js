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

import DrawerComponent from "./DrawerComponent/DrawerComponent";
import { GiBookAura } from "react-icons/gi";
import { MdHome } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { ImHappy } from "react-icons/im";

import Auth from "../../utils/auth";

import LoginForm from "../SignInForm";
import SignUpForm from "../SignUpForm";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "1.9rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
    },
  },
  acount: {
    marginLeft: "auto",
    "&:hover": {
      background: "purple",
    },
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  iconLogo: {
    color: "yellow",
    fontSize: "3rem",
  },
  icons: {
    fontSize: "1.4rem",
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

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

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

  const renderLogin = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          <DrawerComponent />
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
              icon={<MdHome className={classes.icons} />}
              label="Home"
            />
            <Tab
              component={Link}
              to="/profile"
              disableRipple
              icon={<VscAccount className={classes.icons} />}
              label="Profile"
            />
            <Tab
              component={Link}
              to="/picking"
              disableRipple
              icon={<FaWarehouse className={classes.icons} />}
              label="Picking"
            />
            <Tab
              component={Link}
              to="/receiving"
              disableRipple
              icon={<RiProductHuntLine className={classes.icons} />}
              label="Receiving"
            />

            <Tab
              component={Link}
              to="/putaway"
              disableRipple
              icon={<ImHappy className={classes.icons} />}
              label="PutAway"
            />

            <Tab
              component={Link}
              to="/dispatch"
              disableRipple
              icon={<FiTruck className={classes.icons} />}
              label="Dispatch"
            />
          </Tabs>
          <Button
            component={Link}
            to="/profile"
            aria-controls="menu"
            onMouseOver={handleOpenMenu}
            className={classes.acount}
            disableElevation
            disableRipple
            variant="contained"
            color="secondary"
          >
            Profile
          </Button>
          <Button
            onClick={Auth.logout}
            className={classes.acount}
            disableElevation
            disableRipple
            variant="contained"
            color="secondary"
          >
            Logout
          </Button>
        </>
      );
    } else {
      return (
        <AppBar>
          <LoginForm />
        </AppBar>
      );
    }
  };

  return (
    <>
      <AppBar elevation={0} color="primary">
        <Toolbar>
          <Typography>
            <GiBookAura className={classes.iconLogo} />
          </Typography>
          {renderLogin()}
        </Toolbar>
      </AppBar>
      <Menu
        style={{ marginTop: "50px" }}
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>My Account</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Examination Results</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Promotions</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Pending Fees</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Final Project</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
