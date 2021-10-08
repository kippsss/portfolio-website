import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  sections: {
    display: "flex",
    minWidth: "375px",
    width: "800px",
    justifyContent: "space-around",
  },
  sectionName: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    color: "black",
    fontSize: "1em",
  },
  button: {
    fontFamily: "Montserrat, sans-serif",
    margin: (props) => (props.isDrawer ? "10px 10px" : "0 10px"),
    "&::after": {
      background: "#FC5185",
      content: "''",
      position: "absolute",
      width: "100%",
      height: "0.13rem",
      left: "0",
      bottom: "0",
      transform: "scale(0,1)",
      transition: "0.3s ease",
    },
    "&:hover::after": {
      transform: "scale(1,1)",
    },
    "&:hover": {
      backgroundColor: "#f0ffff",
    },
  },
}));

const list = ["about", "education", "work", "involvements"];

const BarList = () => {
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
            <Button className={classes.button} disableRipple={true}>
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

export default BarList;
