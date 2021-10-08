import React from "react";
import nusLogo from "../../images/nus-logo.png";
import ItemCard from "../../UI/ItemCard";
import Overlay from "../../UI/Overlay";

const NusCard = () => {
  return (
    <ItemCard
      heading="National University of Singapore"
      subheading="B.Sc.(Hons) Computational Biology"
      img={nusLogo}
      imgPadding="35px"
      isLogo="true"
      period="Aug 2019 - May 2023"
      overlay={
        <Overlay>
          A four-year multidisciplinary programme aimed at developing knowledge
          and skills in biology, computer science, mathematics and statistics.
          Currently pursuing studies on immunology (biology) and database
          systems (computer science).
        </Overlay>
      }
    ></ItemCard>
  );
};

export default NusCard;
