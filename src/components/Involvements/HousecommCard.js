import React from "react";
import ItemCard from "../../UI/ItemCard";
import ButtonModal from "../../UI/ButtonModal";
import housecommImg from "../../images/housecomm2.jpg";
import Typography from "@material-ui/core/Typography";
import Overlay from "../../UI/Overlay";

const HousecommCard = () => {
  return (
    <ItemCard
      heading="House Committee"
      subheading="Finance Secretary"
      img={housecommImg}
      period="Sep 2019 - May 2020"
      overlay={
        <Overlay>
          The House Committee seeks to build the house culture and foster
          meaningful connections among housemates. We organise events and
          initiatives with the aim of forging friendships among members of the
          house.
        </Overlay>
      }
    >
      <ButtonModal
        heading="House Committee"
        subheading="Finance Secretary"
        period="Sep 2019 - May 2020"
      >
        <Typography variant="body1">
          - Advised and managed the committee’s budget, resulting in a 25%
          budget surplus by the end of the year.
        </Typography>
        <Typography variant="body1">
          - Executed neighbourhood events targeted at fostering bonds and
          creating memories among college students.
        </Typography>
        <Typography variant="body1">
          - Collaborated with CAPT finance management to ensure proper budget
          claim procedures were followed for reimbursement purposes.
        </Typography>
      </ButtonModal>
    </ItemCard>
  );
};

export default HousecommCard;
