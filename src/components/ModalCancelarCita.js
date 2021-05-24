import React from "react";
import "./ModalEliminar.styles.scss";
import x from "../images/x.png";

function ModalCancelarCita(props) {
  /*
  const [close, setClose] = useState(true); */

  return (
    <div className={props.setCancelarCita ? "contenedor" : "oculto"}>
      <div className="ventana">
        <button
          className="btn-close-modal"
          onClick={() => props.setCancelarCita(!props.setCancelarCita)}
        >
          <img alt="x" className="img-x-mod" src={x} />
        </button>
        <p className="txt-modal-serv">
          ¿Estás seguro que quieres cancelar tu cita?
        </p>
        <button
          className="btn-eliminar-serv"
          onClick={() => [
            props.setCancelarCita(!props.setCancelarCita),
            props.setVisible1(!props.setVisible1),
            props.setVisible2(!props.setVisible2),
          ]}
        >
          Cancelar cita
        </button>
      </div>
    </div>
  );
}

export default ModalCancelarCita;
