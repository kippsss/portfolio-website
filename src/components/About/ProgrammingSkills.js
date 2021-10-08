import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import python from "../../images/python.png";
import react from "../../images/react.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import javascript from "../../images/javascript.png";
import flutter from "../../images/flutter.png";
import java from "../../images/java.png";
import postgresql from "../../images/postgresql.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "40px",
    margin: "5px",
  },
}));

const logoList = [
  ["Python", python],
  ["Java", java],
  ["HTML", html],
  ["CSS", css],
  ["JavaScript", javascript],
  ["React", react],
  ["Flutter", flutter],
  ["PostgreSQL", postgresql]
];

const ProgrammingSkills = () => {
  const classes = useStyles();

  return (
    <div>
      {logoList.map((logo) => {
        return (
          <Tooltip title={logo[0]} key={Math.random()}>
            <img
              className={classes.logo}
              src={logo[1]}
              alt="Proficiency Logo"
            />
          </Tooltip>
        );
      })}
    </div>
  );
};

export default ProgrammingSkills;
