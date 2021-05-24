import React from "react";
import "./ModalSmileFace.styles.scss";
import x from "../images/x.png";

import smileimg from "../images/smileimg.png";
import LoadingSpinner from "./LoadingSpinner";

function ModalSmileFace(props) {
  return (
    <div className={props.setSmile ? "contenedor-faces" : "hidden"}>
      <div className="ventana-faces">
        <button
          className="btn-close-modal"
          onClick={() => props.setSmile(!props.setSmile)}
        >
          <img alt="x" className="img-x-mod-face" src={x} />
        </button>
        <div className="cont-smile-face">
          <img src={smileimg} alt="img" className="pink-face" />

          <p className="txt-modal-faces">
            ¡Agradecemos que hayas tenido una buena experiencia!
          </p>

          <input
            type="text-area"
            placeholder="Déjanos tus comentarios"
            className="inpt-comentarios"
          ></input>

          <button
            className="btn-enviar-faces"
            onClick={() => props.setSmile(!props.setSmile)}
          >
            Compártenos en tus redes sociales
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalSmileFace;
