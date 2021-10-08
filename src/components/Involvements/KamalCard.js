import React from "react";
import ItemCard from "../../UI/ItemCard";
import ButtonModal from "../../UI/ButtonModal";
import kamalImg from "../../images/kamal.jpg";
import Typography from "@material-ui/core/Typography";
import Overlay from "../../UI/Overlay";

const HousecommCard = () => {
  return (
    <ItemCard
      heading="CAPT Kamal"
      subheading="Logistics Head"
      img={kamalImg}
      period="Oct 2019 - May 2020"
      overlay={
        <Overlay>
          CAPT Kamal is an overseas programme aimed at teaching youths from
          Bangalore the importance of education through a series of planned
          activities. We also held a fundraiser for our partner organisations to
          buy basic ammenities for the youths under their care. Unfortunately,
          due to Covid-19, we were unable to make the trip to Bangalore.
        </Overlay>
      }
    >
      <ButtonModal
        heading="CAPT Kamal"
        subheading="Logistics Head"
        period="Oct 2019 - May 2020"
      >
        <Typography variant="body1">
          - Managed overall welfare and direction of the committee as part of
          the EXCO.
        </Typography>
        <Typography variant="body1">
          - Directed a subcommittee in sourcing of affordable and effective
          logistics as required by the programme.
        </Typography>
        <Typography variant="body1">
          - Established communication with overseas accommodations to ensure
          reservations are made before the trip.
        </Typography>
      </ButtonModal>
    </ItemCard>
  );
};

export default HousecommCard;
