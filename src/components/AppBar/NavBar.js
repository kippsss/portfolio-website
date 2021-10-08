import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import BarList from "./BarList";
import DrawerList from './DrawerList';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles((isMenuIcon) => ({
  appbar: {
    backgroundColor: "#f0ffff",
    boxShadow: "0px 0px",
    position: "sticky",
    marginTop: "20px",
  },
  toolbar: {
    justifyContent: (isMenuIcon) => (isMenuIcon ? "flex-end" : "center"),
    height: "64px",
  },
}));

const NavBar = () => {
  const [drawerState, setDrawerState] = useState(false);
  const isMenuIcon = useMediaQuery("(max-width: 500px)");
  const classes = useStyles(isMenuIcon);

  const toggleDrawer = (bool) => {
    setDrawerState(bool);
  };

  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        {isMenuIcon ? (
          <React.Fragment>
            <IconButton onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              className={classes.drawer}
              anchor="top"
              open={drawerState}
              onClose={() => toggleDrawer(false)}
              onOpen={() => toggleDrawer(true)}
            >
              <DrawerList toggleDrawer={toggleDrawer}/>
            </SwipeableDrawer>
          </React.Fragment>
        ) : (
          <BarList />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
