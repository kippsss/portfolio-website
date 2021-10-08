import React from "react";
import captLogo from "../../images/capt-logo.png";
import ItemCard from "../../UI/ItemCard";
import Overlay from "../../UI/Overlay";

const CaptCard = () => {
  return (
    <ItemCard
      heading="College of Alice and Peter Tan"
      subheading="University Town College Programme"
      img={captLogo}
      imgPadding="20px"
      isLogo="true"
      period="Aug 2019 - May 2021"
      overlay={
        <Overlay>
          A two-year programme aimed at developing strong writing skills and
          critical thinking and perspectives on global issues.
        </Overlay>
      }
    ></ItemCard>
  );
};

export default CaptCard;
