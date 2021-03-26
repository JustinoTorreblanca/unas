import React from "react";
import "./Domicilio.css";

function Domicilio() {
  return (
    <div className="domicilio">
      <div className="serv-dom">
        <h1>¡Nuestro servicio es a domicilio!</h1>
      </div>
      <br />
      <p className="txt">
        Nuestras manicuristas son trasladadas en coche privado y sanitizado para
        tu seguridad. Cubrimos estas zonas de la CDMX !Pregunta si llegamos a la
        tuya!
      </p>
      <ul className="zonas">
        <li>Polanco</li>
        <br />
        <li>Lomas</li>
        <br />
        <li>Santa Fé</li>
        <br />
        <li>Condesa</li>
        <br />
        <li>Bosques</li>
        <br />
        <li>Interlomas</li>
        <br />
        <li>Palmas</li>
        <br />
        <li>Tecamachalco</li>
        <br />
        <li>El Olivo</li>
        <br />
        <li>El Chamizal</li>
        <br />
        <li>Plaza Carzo</li>
      </ul>
    </div>
  );
}

export default Domicilio;
