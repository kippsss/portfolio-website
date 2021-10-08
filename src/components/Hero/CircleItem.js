import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//props to receive are
// 1) topleft is a list that takes 2 strings, first index is distance from top, second index is distance from left
// 2) size is a value that represents both the height and the width of the circle
// 3) color is a backgroundColor that will be the color of the circle

const useStyles = makeStyles(() => ({
  circleItem: {
    position: "absolute",
    borderRadius: "50%",
    top: (props) => (props.topleft ? props.topleft[0] : "0px"),
    left: (props) => (props.topleft ? props.topleft[1] : "0px"),
    height: (props) => (props.size ? props.size : "100px"),
    width: (props) => (props.size ? props.size : "100px"),
    backgroundColor: (props) => (props.color ? props.color : "#DEEDF0"),
  },
}));

const CircleItem = (props) => {
  const classes = useStyles(props);

  return <div className={classes.circleItem} />;
};

export default CircleItem;
