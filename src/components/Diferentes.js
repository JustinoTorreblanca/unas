import React from "react";
import "./Diferentes.scss";
import difimg from "../images/dif.png"

function Diferentes() {
  return (
    <div className="containter-diferentes">
      <img
        src={difimg}
        alt="img"
        className="foto-diferente"
      ></img>
      <div className="diferentes">
        <h1 className="dif">¿Por qué somos diferentes?</h1>
        <p className="hidromasaje">
          ¡Somos el único servicio a domicilio que cuenta con un hidromasaje!
        </p>
        <a href="/agendar-cita">
          <input
            type="button"
            className="btn-agendar-dif"
            value="Agendar cita"
          ></input>
        </a>
      </div>
    </div>
  );
}

export default Diferentes;
