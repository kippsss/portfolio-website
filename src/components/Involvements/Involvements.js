import React from "react";
import GridPage from "../../UI/GridPage";
import SportscommCard from "./SportscommCard";
import HousecommCard from "./HousecommCard";
import KamalCard from "./KamalCard";
import BadmintonCard from "./BadmintonCard";

const Involvements = () => {
  return (
    <GridPage title="Involvements">
      <SportscommCard />
      <BadmintonCard />
      <KamalCard />
      <HousecommCard />
    </GridPage>
  );
};

export default Involvements;
