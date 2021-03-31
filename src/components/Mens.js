import React from "react";
import "./Mens.css";


function Mens() {
  return (
    <div className="mens-container">
      <div className="for-men">
        <h1 className="for">FOR</h1>
        <br />
        <h1 className="men">MEN</h1>
        <div className="servicio-hombre">
          <p className="nuestro">
            Nuestro servicio es dirigido también a los hombres que se preocupan
            por su apariencia.
          </p>
        </div>

        <a href="/agendar-cita">
          <input
            type="button"
            className="btn-agendar-blanco"
            value="Agendar cita"
          ></input>
        </a>
      </div>
    </div>
  );
}

export default Mens;
