import React from "react";
import "./Diferentes.css";

function Diferentes() {
  return (
    <div className="containter-diferentes">
      <img
        src="https://clounailcare.com/static/media/carousel1.e149173a.jpg"
        alt="img"
        className="foto-diferente"
      ></img>
      <div className="diferentes">
        <h1 className="dif">¿Por qué somos diferentes?</h1>
        <p className="hidromasaje">
          ¡Somos el único servicio a domicilio que cuenta con un hidromasaje!
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

export default Diferentes;
