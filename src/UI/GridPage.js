import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  GridPage: {
    backgroundColor: "#f0ffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 0px 70px 0px",
  },
  titleDiv: {
    margin: "20px",
  },
  titleTextLarge: {
    fontFamily: "Julius Sans One, sans-serif",
    fontSize: "2.3rem",
    fontWeight: "600",
    textAlign: "center",
  },
  cardsDiv: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1300px",
  },
}));

const GridPage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.GridPage}>
      <div className={classes.titleDiv}>
        <Typography variant="h6" className={classes.titleTextLarge}>
          {props.title}
        </Typography>
      </div>
      <Grid container className={classes.cardsDiv}>
        {props.children}
      </Grid>
    </div>
  );
};

export default GridPage;
