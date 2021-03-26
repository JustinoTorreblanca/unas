import React, { useState } from "react";
import "./ForMenServicios.scss";
import ReactCardFlip from "react-card-flip";
import flechasg from "../images/icongray.png";

function ForMenServicios() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="mens-container-serv">
      <div className="for-men-serv">
        <h1 className="for-word">FOR</h1>
        <br />
        <h1 className="men-word">MEN</h1>
        <hr className="linea"></hr>

        <ReactCardFlip isFlipped={isFlipped}>
          <div className="servicio-hombre-blanco" onClick={handleClick}>
            <p className="combo-spa-front">
              Combo Spa
              <br />
              Mix
            </p>
            <p className="price">$650</p>

            <input
              type="button"
              className="btn-info-blanco"
              value="Más información"
            ></input>
          </div>

          <div className="services-back-men" onClick={handleClick}>
            <span className="titulo">Manicure Spa </span>
            <p className="txt-back">
              Limado y forma + cuidado de cutícula + exfoliante OPI + crema OPI
            </p>
            <span className="titulo">Pedicure Spa </span>
            <p className="txt-back">
              Limado y forma + cuidado de cutícula masaje en tina shiatsu +
              exfoliante OPI + crema OPI
            </p>
            <p className="txt-back">
              $50 más sobre cada servicio en contratación individual
            </p>

            <img
              src={flechasg}
              alt="flechas-black"
              color="black"
              className="flechas-black"
            />
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default ForMenServicios;
