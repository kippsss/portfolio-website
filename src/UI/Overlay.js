import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    opacity: "0",
    transition: ".5s ease",
    "&:hover": {
      opacity: "0.8",
    },
  },
  description: {
    padding: "30px",
    color: "white",
  },
}));

const Overlay = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.overlay}>
      <div className={classes.description}>{props.children}</div>
    </div>
  );
};

export default Overlay;
