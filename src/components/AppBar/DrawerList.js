import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";
import Involvements from "../Involvements/Involvements";

const useStyles = makeStyles((theme) => ({
  sections: {
    display: "flex",
    flexDirection: "column",
  },
  button: { width: "100%", height: "70px" },
  
  sectionName: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    color: "black",
    fontSize: "1.3em",
  },
}));

const list = ["about", "education", "work", "involvements"];

const DrawerList = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      {list.map((category) => {
        return (
          <Link
            activeClass="active"
            to={category}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Button
              className={classes.button}
              onClick={() => props.toggleDrawer(false)}
            >
              <Typography variant="h6" className={classes.sectionName}>
                {category}
              </Typography>
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default DrawerList;
