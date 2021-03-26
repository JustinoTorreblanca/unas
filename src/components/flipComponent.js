import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./back-flipcard.styles.scss";
import "./flipcomponent.styles.scss";

import flechas from "../images/icon.png";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped}>
        <div className="services-front" onClick={handleClick}>
          <h1 className="h3 card-services-titulo">Combo Spa Polish</h1>
          <span className="h4 card-services-price">$750</span>
          <span className="card-services-info">Más información</span>
        </div>

        <div className="services-back" onClick={handleClick}>
          <span className="titulo">Manicure Spa Polish</span>
          <p className="txt-back">
            Limado y forma + cuidado de cutícula + exfoliante OPI + crema OPI +
            esmalte OPI
          </p>
          <span className="titulo">Pedicure Spa Polish</span>
          <p className="txt-back">
            Limado y forma + cuidado de cutícula masaje en tina shiatsu +
            exfoliante OPI + crema OPI + esmalte OPI
          </p>

          <img
            src={flechas}
            alt="flechas"
            color="white"
            className="turn-arrow"
          />
        </div>
      </ReactCardFlip>
    </>
  );
};

export default CardFlip;
