import React from "react";
import "./ModalSmileFace.styles.scss";
import x from "../images/x.png";

import neutralimg from "../images/neutralimg.png";

function ModalNeutralFace(props) {
  return (
    <div className={props.setNeutral ? "contenedor-faces" : "hidden"}>
      <div className="ventana-faces">
        <button
          className="btn-close-modal"
          onClick={() => props.setNeutral(!props.setNeutral)}
        >
          <img alt="x" className="img-x-mod-face" src={x} />
        </button>
        <div className="cont-smile-face">
          <img src={neutralimg} alt="img" className="pink-face" />

          <p className="txt-modal-faces">
            Queremos que tengas una mejor experiencia en tu próxima cita
          </p>

          <input
            type="text-area"
            placeholder="Déjanos tus comentarios para mejorar"
            className="inpt-comentarios"
          ></input>

          <button
            className="btn-enviar-faces"
            onClick={() => props.setNeutral(!props.setNeutral)}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalNeutralFace;
