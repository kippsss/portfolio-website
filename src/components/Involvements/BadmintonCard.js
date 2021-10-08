import React from "react";
import ItemCard from "../../UI/ItemCard";
import ButtonModal from "../../UI/ButtonModal";
import badmintonImg from "../../images/badminton.jpg";
import Overlay from "../../UI/Overlay";
import Typography from "@material-ui/core/Typography";

const BadmintonCard = () => {
  return (
    <ItemCard
      heading="Badminton Interest Group"
      subheading="Head"
      img={badmintonImg}
      period="May 2020 - May 2021"
      overlay={
        <Overlay>
          The Badminton Interest Group in CAPT is a platform for residents to
          enjoy and learn all things badminton. Through weekly sessions, we
          encourage anybody, regardless of skill, to learn and grow together in
          the sport.
        </Overlay>
      }
    >
      <ButtonModal
        heading="Badminton Interest Group (IG)"
        subheading="IG Head"
        period="May 2020 - May 2021"
      >
        <Typography variant="body1">
          - Co-headed the weekly planning and execution of Badminton Interest
          Group sessions held in the college.
        </Typography>
        <Typography variant="body1">
          - Planned lessons on the fundamentals of the sport and organised
          inclusive matches for enjoyment and development of skills.
        </Typography>
        <Typography variant="body1">
          - Accounted for the logistics and budget required to sustain the
          Interest Group for the academic year.
        </Typography>
      </ButtonModal>
    </ItemCard>
  );
};

export default BadmintonCard;
