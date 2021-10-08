import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  socialsDiv: {
    display: "flex",
    justifyContent: "space-around",
    padding: "30px 0",
    width: "100%",
  },
  logo: { width: "22px" },
}));

const Socials = () => {
  const classes = useStyles();
  return (
    <div className={classes.socialsDiv}>
      <Tooltip title="Email">
        <IconButton
          color="inherit"
          aria-label="email"
          onClick={() => (window.location = "mailto:keithchewzk@u.nus.edu")}
        >
          <MailOutlineIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton
          color="inherit"
          aria-label="Linkedin.com"
          onClick={() =>
            window.open("https://www.linkedin.com/in/keith-chew-36745a1ba/")
          }
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Instagram">
        <IconButton
          color="inherit"
          aria-label="Instagram.com"
          onClick={() => window.open("https://www.instagram.com/kippss___/")}
        >
          <InstagramIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Socials;
