import React from "react";
import "./CardMetodoPago.scss";
import flechapasos from "../images/iconopasos.png";

function CardMetodoPago(props) {
  /* const [pago, setPago] = useState({ });

  const handleChange = (e) => {
    setPago({
      ...pago,
      [e.target.name]: e.target.value
    })
  } */

  return (
    <div className="container-metodo-pago">
      <div className="zona-pago">
        <span className="titulo-zona-pago">Método de pago</span>
        <img src={flechapasos} alt="flecha" className="flecha-pasos"></img>
      </div>
      <div className="wrap-pago">
        <form className="form-pago">
          <div className="cont-efectivo">
            <input
              type="radio"
              className="radio-btn-efectivo"
              name="modo-pago"
              value="efectivo"
              onChange={props.handleChange}
              id="efectivo"
            />
            <label className="efectivo" htmlFor="efectivo">
              Efectivo
            </label>
          </div>

          <div className="cont-tarjeta">
            <input
              type="radio"
              className="radio-btn-tarjeta"
              name="modo-pago"
              value="tarjeta"
              onChange={props.handleChange}
              id="tarjeta"
            />
            <label className="tarjeta" htmlFor="tarjeta">
              Tarjeta de crédito o débito con terminal
            </label>
          </div>

          <div className="cont-transferencia">
            <input
              type="radio"
              className="radio-btn-transferencia"
              name="modo-pago"
              value="transferencia"
              onChange={props.handleChange}
              id="transferencia"
            />
            <label className="transferencia" htmlFor="transferencia">
              Transferencia interbancaria
            </label>
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
