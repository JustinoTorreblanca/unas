import React from "react";
import "./CardDomicilio.scss";
import flechapasos from "../images/iconopasos.png";

function CardDomicilio(props) {
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
              name="direccion"
              id="direccion registrada"
              onChange={props.handleChange}
              value="registrada"

            />
            <label className="dir" htmlFor="direccion registrada">Dirección registrada</label>
          </div>
          <div className="nueva-dir">
            <input
              type="radio"
              className="radio-btn-efectivo"
              name="direccion"
              id="agregar direccion"
              onChange={props.handleChange}
              value="agregar direccion"
            />
            <label className="dir-nueva" htmlFor="agregar direccion" >Agregar nueva dirección</label>
          </div>
        </div>
        <div className="contenedor-inputs">
          <div className="txt-calle-pasos">
            <div className="calle-pasos">
              <label className="txt-pas">Calle*</label>
              <input type="text" className="txt-calle" onChange={props.handleChange} name="calle" />
            </div>
            <div className="cp-pasos">
              <label className="txt-pas">CP</label>
              <input type="number" className="txt-cp" onChange={props.handleChange} name="CP"/>
            </div>
            <div className="fracc">
              <label className="txt-pas">Fraccionamiento</label>
              <input type="text" className="txt-fracc" onChange={props.handleChange} name="fraccionamiento"/>
            </div>
          </div>
          <div className="wrap-num-colonia">
            <div className="numero-pasos">
              <label className="txt-pas">Número</label>
              <input type="number" className="txt-col" onChange={props.handleChange} name="numero exterior"/>
            </div>
            <div className="colonia-pasos">
              <label className="txt-pas">Colonia*</label>
              <input type="text" className="txt-num" onChange={props.handleChange} name="colonia"/>
            </div>
            <label className="txt-requiere">
              ¿Se requiere pasar por caseta?
            </label>
            <div className="inpts-caseta">
              <input type="radio" className="txt-caseta" name="caseta" onChange={props.handleChange} value="si" id="yes"/>
              <label className="txt-si" htmlFor="yes">Si</label>
              <input type="radio" className="txt-caseta" name="caseta" onChange={props.handleChange} value="no" id="not"/>
              <label className="txt" htmlFor="not">No</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDomicilio;
