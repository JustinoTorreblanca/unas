import React from "react";
import "./Cards.scss";
import unas from "../images/pintando.png";

function Cards() {
  return (
    <div className="quienes-somos">
      <div className="unas-img">
        <img alt="pintando" src={unas} className="unas-img"></img>
      </div>
      <div className="texto">
        <h1 className="quienes">¿Quienes somos?</h1>
        <p className="somos">
          Clou es un negocio hecho por mujeres que surgió para ayudar a las
          mujeres mexicanas trabajadoras que perdieron sus trabajos durante la
          pandemia de Covid-19.
        </p>
        <a href="/">
          <input
            type="button"
            className="btn-agendar-somos"
            value="Agendar cita"
          ></input>
        </a>
      </div>
    </div>
  );
}

export default Cards;
