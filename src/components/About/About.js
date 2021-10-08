import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridPage from "../../UI/GridPage";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProgrammingSkills from "./ProgrammingSkills";
import BioinformaticsSkills from "./BioinformaticsSkills";
import avatar from "../../images/avatar.png";

const useStyles = makeStyles((theme) => ({
  avatarDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "250px",
    margin: "20px",
  },
  avatar: {
    height: "100%",
    borderRadius: "50%",
    width: "100%",
    objectFit: "cover",
  },
  avatarBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#deedf0",
    backgroundColor: "#fff5eb",
    borderRadius: "50%",
    height: "300px",
    width: "300px",
  },
  description: {
    marginBottom: "20px",
  },
  introDiv: {
    diplay: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "250px",
    maxWidth: "350px",
    margin: "20px",
  },
  categoryTitle: {
    fontSize: "1.1rem",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "600",
  },
  paddingDiv: {
    height: "20px",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <GridPage title="About Me">
      <div className={classes.avatarDiv}>
        <Box className={classes.avatarBackground}>
          <img className={classes.avatar} src={avatar} alt="avatar" />
        </Box>
      </div>
      <div className={classes.introDiv}>
        <Typography className={classes.description} variant="body1">
          Hey there, Keith here! I'm an undergraduate at NUS, majoring in
          Computational Biology. My academic interests include immunology &
          infection in life science, as well as web development in the field of
          computer science. My proficiencies in programming and bioinformatics
          are as follows:
        </Typography>
        <Typography className={classes.categoryTitle} variant="subtitle1">
          Programming
        </Typography>
        <ProgrammingSkills />
        <div className={classes.paddingDiv} />
        <Typography className={classes.categoryTitle} variant="subtitle1">
          Bioinformatics
        </Typography>
        <BioinformaticsSkills />
      </div>
    </GridPage>
  );
};

export default About;
