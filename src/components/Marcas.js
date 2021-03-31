import React from "react";
import "./Marcas.scss";
import opi from "../images/opi1.png";
import gelish from "../images/gelish2.png";
import renpho from "../images/renpho3.png";

function Marcas() {
  return (
    <div className="container-marcas">
      <h1 className="titulo-marcas">Trabajamos con las mejores marcas</h1>
      <p className="marcas-texto">
        En Clou nos preocupamos por brindarte el mejor servicio y por eso
        nuestro trabajo está respaldado por las mejores marcas del mercado.
      </p>
      <a href="/agendar-cita" className="anchor-agendar">
        <span className="btn-agendar-marcas">Agendar cita</span>
      </a>
      <div className="logos">
        <img src={opi} alt="img" className="opi"></img>
        <img src={gelish} alt="img" className="gelish"></img>
        <img src={renpho} alt="img" className="renpho"></img>
      </div>
    </div>
  );
}

export default Marcas;
