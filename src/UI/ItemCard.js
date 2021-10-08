import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    minWidth: "300px",
    maxWidth: "400px",
    margin: "20px",
  },
  imageDiv: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    height: (props) =>
      props.isLogo
        ? props.imgPadding
          ? `calc(200px - (${props.imgPadding} * 2))`
          : "200px"
        : "300px",
    padding: (props) => props.imgPadding,
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: (props) => (props.isLogo ? "contain" : "cover"),
  },
  descriptionDiv: { padding: "15px 20px" },
  heading: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.5rem",
    fontWeight: "600",
  },
  subheading: {
    fontFamily: "Montserrat, sans",
    color: "dark-grey",
    fontSize: "1.1rem",
    fontWeight: "300",
  },
  info: {
    paddingTop: "10px",
    fontSize: "0.9rem",
  },
  period: {
    fontSize: "0.8rem",
  },
});

const ItemCard = (props) => {
  const classes = useStyles(props);

  return (
    <Card className={classes.card}>
      <div className={classes.imageDiv}>
        <img className={classes.image} src={props.img} alt="Unable to load" />
        {props.overlay ? props.overlay : null}
      </div>
      <Divider width="100%" />
      <div className={classes.descriptionDiv}>
        <Typography className={classes.heading} variant="h5">
          {props.heading}
        </Typography>
        <Typography className={classes.subheading} variant="subtitle1">
          {props.subheading}
        </Typography>
        <Typography className={classes.period}>{props.period}</Typography>
        {props.info ? (
          <Typography className={classes.info} variant="body1">
            {props.info}
          </Typography>
        ) : null}
      </div>
      {props.children}
    </Card>
  );
};

export default ItemCard;
