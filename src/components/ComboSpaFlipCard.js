import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./back-flipcard.styles.scss";
import "./Servicios.scss"

import flechas from "../images/icon.png";

const ComboSpaCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped}>
          <div className="second-card" onClick={handleClick}>
            <h1 className="h3 card-services-titulo">Combo Spa Gel</h1>
            <span className="h4 card-services-price">$950</span>
            <span className="card-services-info">Más información</span>
          </div>

        <div className="services-back" onClick={handleClick}>
          <span className="titulo">Manicure Spa Gel</span>
          <p className="txt-back">
            Limado y forma + cuidado de cutícula + exfoliante OPI + crema OPI +
            esmalte gel
          </p>
          <span className="titulo">Pedicure Spa Gel</span>
          <p className="txt-back">
            Limado y forma + cuidado de cutícula masaje en tina shiatsu +
            exfoliante OPI + crema OPI + esmalte gel
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

export default ComboSpaCard;
