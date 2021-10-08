import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelfPortrait from "./SelfPortrait";
import Intro from "./Intro";


const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: "#fff5eb",
    display: "flex",
    height: "calc(100vh - 60px)",
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    padding: "30px 0",
    [theme.breakpoints.down("sm")]: {
      minHeight: "100vh",
      height: "auto",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
      <div className={classes.hero}>
        <SelfPortrait />
        <Intro />
      </div>
  );
};

export default Hero;
