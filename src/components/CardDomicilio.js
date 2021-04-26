import React from "react";
import "./CardDomicilio.scss";
import flechapasos from "../images/iconopasos.png";

function CardDomicilio() {
  return (
    <div className="container-domicilio-pasos">
      <div className="pasos-domicilio">
        <span className="titulo-domicilio-pasos">Domicilio</span>
        <img
          src={flechapasos}
          alt="flecha"
          className="flecha-pasos-domicilio"
        ></img>
      </div>
      <div className="wrap-domicilio">
        <div className="cont-domic">
          <div className="dir-registrada">
            <input
              type="radio"
              className="radio-btn-efectivo"
              name="dirreccion"
            />
            <label className="dir">Dirección registrada</label>
          </div>
          <div className="nueva-dir">
            <input
              type="radio"
              className="radio-btn-efectivo"
              name="dirreccion"
            />
            <label className="dir-nueva">Agregar nueva dirección</label>
          </div>
        </div>
        <div className="contenedor-inputs">
          <div className="txt-calle-pasos">
            <div className="calle-pasos">
              <label className="txt-pas">Calle*</label>
              <input type="text" className="txt-calle" />
            </div>
            <div className="cp-pasos">
              <label className="txt-pas">CP</label>
              <input type="text" className="txt-cp" />
            </div>
            <div className="fracc">
              <label className="txt-pas">Fraccionamiento</label>
              <input type="text" className="txt-fracc" />
            </div>
          </div>
          <div className="wrap-num-colonia">
            <div className="numero-pasos">
              <label className="txt-pas">Número</label>
              <input type="text" className="txt-col" />
            </div>
            <div className="colonia-pasos">
              <label className="txt-pas">Colonia*</label>
              <input type="text" className="txt-num" />
            </div>
            <label className="txt-requiere">
              ¿Se requiere pasar por caseta?
            </label>
            <div className="inpts-caseta">
              <input type="radio" className="txt-caseta" name="si" />
              <label className="txt-si">Si</label>
              <input type="radio" className="txt-caseta" name="si" />
              <label className="txt">No</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDomicilio;
