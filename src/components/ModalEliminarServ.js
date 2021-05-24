import React from "react";
import "./ModalEliminar.styles.scss";
import x from "../images/x.png";

function ModalEliminarServ(props) {
  /*
  const [close, setClose] = useState(true); */

  return (
    <div className={props.setOpen ? "contenedor" : "oculto"}>
      <div className="ventana">
        <button
          className="btn-close-modal"
          onClick={() => props.setOpen(!props.setOpen)}
        >
          <img alt="x" className="img-x-mod" src={x} />
        </button>
        <p className="txt-modal-serv">
          ¿Estás seguro que quieres eliminar el servicio?
        </p>
        <button
          className="btn-eliminar-serv"
          onClick={() => props.setOpen(!props.setOpen)}
        >
          Eliminar servicio
        </button>
      </div>
    </div>
  );
}

export default ModalEliminarServ;
