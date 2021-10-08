import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import gromacs from "../../images/gromacs.png";
import vmd from "../../images/vmd.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "40px",
    margin: "5px",
  },
}));

const logoList = [
  ["GROMACS", gromacs],
  ["VMD", vmd],
];

const BioinformaticsSkills = () => {
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
              width={logo[2]}
            />
          </Tooltip>
        );
      })}
    </div>
  );
};

export default BioinformaticsSkills;
