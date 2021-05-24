import React from "react";
import "./ModalSmileFace.styles.scss";
import x from "../images/x.png";

import sadimg from "../images/sadimg.png";

function ModalSadFace(props) {
  return (
    <div className={props.setSad ? "contenedor-faces" : "hidden"}>
      <div className="ventana-faces">
        <button
          className="btn-close-modal"
          onClick={() => props.setSad(!props.setSad)}
        >
          <img alt="x" className="img-x-mod-face" src={x} />
        </button>
        <div className="cont-smile-face">
          <img src={sadimg} alt="img" className="pink-face" />

          <p className="txt-modal-faces">
            Lamentamos que hayas tenido una mala experiencia
          </p>

          <input
            type="text-area"
            placeholder="Déjanos tus comentarios para mejorar"
            className="inpt-comentarios"
          ></input>

          <button
            className="btn-enviar-faces"
            onClick={() => props.setSad(!props.setSad)}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalSadFace;
