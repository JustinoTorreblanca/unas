import React from "react";
import "./CardMetodoPago.scss";
import flechapasos from "../images/iconopasos.png";

function CardMetodoPago() {
  return (
    <div className="container-metodo-pago">
      <div className="zona-pago">
        <span className="titulo-zona-pago">¿En qué zona te encuentras?</span>
        <img src={flechapasos} alt="flecha" className="flecha-pasos"></img>
      </div>
      <div className="wrap-pago">
        <form className="form-pago">
          <div className="cont-efectivo">
            <input
              type="radio"
              className="radio-btn-efectivo"
              name="modo-pago"
            />
            <label className="efectivo">Efectivo</label>
          </div>

          <div className="cont-tarjeta">
            <input
              type="radio"
              className="radio-btn-tarjeta"
              name="modo-pago"
            />
            <label className="tarjeta">
              Tarjeta de crédito o débito con terminal
            </label>
          </div>

          <div className="cont-transferencia">
            <input
              type="radio"
              className="radio-btn-transferencia"
              name="modo-pago"
            />
            <label className="transferencia">Transferencia interbancaria</label>
          </div>
        </form>
        <div className="datos-banco">
          <h1 className="datos-bancarios">Datos Bancarios</h1>
          <p className="banco">Banco:</p>
          <p className="nobmre-pago">Nombre:</p>
          <p className="clabe-pago">Clabe:</p>
          <p className="num-cuenta">Número de cuenta:</p>
        </div>
        <p className="cambio-cita">
          *Puede cambiar su método de pago al terminar su cita. No aplica en
          tarjeta de regalo.
        </p>
      </div>
    </div>
  );
}

export default CardMetodoPago;
