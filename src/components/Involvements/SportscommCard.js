import React from "react";
import ItemCard from "../../UI/ItemCard";
import ButtonModal from "../../UI/ButtonModal";
import sportscommImg from "../../images/sportscomm.jpg";
import Typography from "@material-ui/core/Typography";
import Overlay from "../../UI/Overlay";

const SportscommCard = () => {
  return (
    <ItemCard
      heading="CAPT Sports Committee"
      subheading="Developmental Vice-Director"
      img={sportscommImg}
      period="May 2020 - May 2021"
      overlay={
        <Overlay>
          The Sports Committee aims to foster a safe and inclusive sporting
          environment for residents. We oversee a wide array of sports Interest
          Groups (IGs) and organise events such as Inter-College Games and
          Inter-Neighbourhood Games.
        </Overlay>
      }
    >
      <ButtonModal
        heading="CAPT Sports Committee"
        subheading="Developmental Vice-Director"
        period="May 2020 - May 2021"
      >
        <Typography variant="body1">
          - Supervised growth and development of Sports Committee members.
        </Typography>
        <Typography variant="body1">
          - Fostered a network of accountability among members to better
          facilitate individual character growth.
        </Typography>
        <Typography variant="body1">
          - Organised sporting events for CAPT and coordinated safe conduct of
          sports interest groups.
        </Typography>
        <Typography variant="body1">
          - Led the publicity team to promote college events through social
          media and hard publicity.
        </Typography>
        <Typography variant="body1">
          - Spearheaded the planning and execution of Community Engagement &
          Health Awareness Week.
        </Typography>
      </ButtonModal>
    </ItemCard>
  );
};

export default SportscommCard;
