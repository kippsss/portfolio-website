import React from "react";
import astarLogo from "../../images/astar-logo.jpg";
import Typography from "@material-ui/core/Typography";
import ButtonModal from "../../UI/ButtonModal";
import ItemCard from "../../UI/ItemCard";

const AstarCard = () => {
  return (
    <ItemCard
      heading="Bioinformatics Research Intern"
      subheading="Bioinformatics Institute @ A*STAR"
      img={astarLogo}
      isLogo={true}
      period="Jan 2021 - Jun 2021"
      info="Computational research on protein-drug binding interactions for the development of pharmaceutical drugs against a variety of diseases."
    >
      <ButtonModal
        heading="Research Intern"
        subheading="Bioinformatics Institute @ A*STAR"
        period="Jan 2021 - Jun 2021"
      >
        <Typography variant="body1">
          - Utilised Molecular Dynamics (MD) and computational modelling to run
          simulations on protein-drug interactions between V-ATPase and
          Archazolide A molecule.
        </Typography>
        <Typography variant="body1">
          - Conducted analysis on simulation trajectories to determine the
          molecular mechanisms between the protein and drug.
        </Typography>
        <Typography variant="body1">
          - Determined the relative possibilities of their predicted binding
          poses through analysis and sound reasoning.
        </Typography>
      </ButtonModal>
    </ItemCard>
  );
};

export default AstarCard;
