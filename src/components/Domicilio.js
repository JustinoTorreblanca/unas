import React from "react";
import "./Domicilio.scss";

function Domicilio() {
  return (
    <div className="domicilio">
      <div className="serv-dom">
        <h1 className="nuestro-serv">¡Nuestro servicio es a domicilio!</h1>
      </div>
      <br />
      <p className="txt">
        Nuestras manicuristas son trasladadas en coche privado y sanitizado para
        tu seguridad. <br /> Cubrimos estas zonas de la CDMX !Pregunta si
        llegamos a la tuya!
      </p>
      <div className="zonas-lista">
        <ul className="zonas">
          <div className="primera-fila">
            <li>Polanco</li>
            <li>Lomas</li>
            <li>Santa Fé</li>
            <li>Condesa</li>
          </div>
          <div className="segunda-fila">
            <li>Bosques</li>
            <li>Interlomas</li>
            <li>Palmas</li>
          </div>
          <div className="tercera-fila">
            <li>Tecamachalco</li>
            <li>El Olivo</li>
            <li>El Chamizal</li>
          </div>
          <div className="plaza-carzo">
            <li>Plaza Carzo</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Domicilio;
