import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  contactPage: {
    backgroundColor: "#DEEDF0",
    padding: "50px",
  },
  contact: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emailIcon: {
    padding: "0px 10px 0px 10px",
    height: "23px",
  },
  contactText: {
    fontSize: "0.8rem",
  },
  socialsBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  socialsIcon: {
    padding: "0px 30px 0px 30px",
    height: "23px",
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contactPage}>
      <div className={classes.contact}>
        <img className={classes.emailIcon} src={email} alt="facebook logo" />
        <Typography className={classes.contactText} variant="h6">
          keithchewzk@u.nus.edu
        </Typography>
      </div>
      <div className={classes.socialsBar}>
        
      </div>
    </div>
  );
};

export default Contact;
