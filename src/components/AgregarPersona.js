import React, {useState} from "react";
import "./AgregarPersona.scss";
import ximage from "../images/x.png";
import Modal from "react-modal";
import Agregar from "../images/agregar.png"


const AgregarPersona = () => {
  const [buttonOtraPersona, setButtonOtraPersona] = useState(false);

  const modalStyles = {
    overlay: {
      width: "559 px",
      height: "390 px",
      position: "absolute",
      top: "1000px",
      left: "300px",
    },
    content: {
      position: "absolute",
      top: "40px",
      left: "40px",
      right: "40px",
      bottom: "40px",
      border: "1px solid #ccc",
      background: "#fff",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
      height: "500px",
      width: "559px",
    },
  };

  return (
    <div className="modal">
      <button
            className="txt-agregar-persona"
            onClick={() => setButtonOtraPersona(true)}
          >
            <img src={Agregar} alt="img" className="add-pers" />
            Agregar a otra persona
          </button>
      <Modal
        isOpen={buttonOtraPersona}
        className="modal-size"
        style={modalStyles}>
          <div className="contenedor">
          <img
            src={ximage}
            alt="cerrar"
            className="close-button"
            onClick={() => setButtonOtraPersona(false)}
          />
            <h1 className="h1-agregas">¿A quién agregas?</h1>
            <input type="radio" name="quien" className="radio-add" />
            <label className="personas">Persona registrada 1</label>
            <input type="radio" name="quien" className="radio-add" />
            <label className="personas">Persona registrada 2</label>
            <input type="radio" name="quien" className="radio-add" />
            <label className="personas">Persona registrada 3</label>
            <input type="radio" name="quien" className="radio-add" />
            <label className="bold-registrar">Registrar a alguien</label>
            <button className="continuar-btn" value="Guardar y continuar">
              Guardar y continuar
            </button>
          </div>
      </Modal>
    </div>

  );
}

export default AgregarPersona;
