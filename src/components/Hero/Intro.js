import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Socials from "./Socials";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
  textDiv: {
    padding: "10px 20px 10px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  textboxName: {
    fontFamily: "Julius Sans One, sans-serif",
    fontWeight: "600",
    fontSize: "4.6rem",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  textboxDescription: {
    fontFamily: "Montserrat, sans",
    fontSize: "1.3rem",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  socialsDiv: {
    display: "flex",
    justifyContent: "space-around",
    padding: "30px 0",
    width: "100%",
  },
  logo: { width: "22px" },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <Grow in={true}>
      <div className={classes.textDiv}>
        <Typography className={classes.textboxName} variant="h2">
          Hi, I'm Keith
        </Typography>
        <Typography className={classes.textboxDescription} variant="h6">
          Aspiring bioinformatician & web developer
        </Typography>
        <Socials />
      </div>
    </Grow>
  );
};

export default Intro;
