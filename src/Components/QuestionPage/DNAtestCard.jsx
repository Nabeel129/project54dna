import React from "react";
import "./DNAtestCard.scss";

const DNAtestCard = (props) => {
  const { image, content } = props.card;
  return (
    <>
      <div className="card">
        <div className="cardItem">
          <div className="cardImage">
            <img src={image} alt="cardImage" />
          </div>
          <p className="cardContent mt-4">{content}</p>
        </div>
      </div>
    </>
  );
};

export default DNAtestCard;
