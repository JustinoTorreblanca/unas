import React, { useState } from "react";

/* import "./Servicios.scss"; */
import flechas from "../images/icon.png";
import "./back-flipcard.styles.scss";

function BackflipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="services-back" onClick={handleClick}>
      <span className="titulo">Manicure Spa Polish</span>
      <p className="txt-back">
        Limado y forma + cuidado de cutícula + exfoliante OPI + crema OPI +
        esmalte OPI
      </p>
      <span className="titulo">Pedicure Spa Polish</span>
      <p className="txt-back">
        Limado y forma + cuidado de cutícula masaje en tina shiatsu + exfoliante
        OPI + crema OPI + esmalte OPI
      </p>

      <img src={flechas} alt="flechas" color="white" className="turn-arrow" />
    </div>
  );
}

export default BackflipCard;
