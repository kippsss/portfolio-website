import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CircleItem from "./CircleItem";

const useStyles = makeStyles((theme) => ({
  circles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0px",
  },
}));

const Circles = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 400px)");

  return (
    <div className={classes.circles}>
      {!isSmallScreen && (
        <div>
          <CircleItem color="#DEEDF0" topleft={["5%", "48%"]} size="200px" />
          <CircleItem color="#DEEDF0" topleft={["80%", "74%"]} size="100px" />
          <CircleItem color="#B2B8A3" topleft={["60%", "0px"]} size="150px" />
          <CircleItem color="#F4C7AB" topleft={["26%", "74%"]} size="100px" />
          <CircleItem color="#F4C7AB" topleft={["10%", "0%"]} size="80px" />
        </div>
      )}
      {isSmallScreen && (
        <div>
          <CircleItem color="#DEEDF0" topleft={["0%", "60%"]} size="130px" />
          <CircleItem color="#DEEDF0" topleft={["74%", "80%"]} size="70px" />
          <CircleItem color="#B2B8A3" topleft={["60%", "0px"]} size="100px" />
          <CircleItem color="#F4C7AB" topleft={["30%", "85%"]} size="60px" />
          <CircleItem color="#F4C7AB" topleft={["10%", "0%"]} size="80px" />
        </div>
      )}
    </div>
  );
};
export default Circles;
