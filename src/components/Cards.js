import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className="quienes-somos">
      <div className="unas-img"></div>
      <div className="texto">
        <h1>¿Quienes somos?</h1>
        <p className="somos">
          Clou es un negocio hecho por mujeres que surgió para ayudar a las
          mujeres mexicanas trabajadoras que perdieron sus trabajos durante la
          pandemia de Covid-19.
        </p>
        <a href="/">
          <input
            type="button"
            className="btn-agendar"
            value="Agendar cita"
          ></input>
        </a>
      </div>
    </div>
  );
}

export default Cards;
