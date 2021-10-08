import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Circles from "./Circles";
import selfPortrait from "../../images/self-portrait.jpg";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  selfPortraitDiv: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px 10px 20px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  selfPortrait: {
    height: "350px",
    width: "350px",
    borderRadius: "50%",
    objectFit: "cover",
    zIndex: "1",
    [theme.breakpoints.down("xs")]: {
      height: "300px",
      width: "300px",
    },
  },
}));

const SelfPortrait = () => {
  const classes = useStyles();
  return (
    <Zoom in={true}>
      <div className={classes.selfPortraitDiv}>
        <img
          className={classes.selfPortrait}
          src={selfPortrait}
          alt="Portrait"
        />

        <Circles />
      </div>
    </Zoom>
  );
};

export default SelfPortrait;
