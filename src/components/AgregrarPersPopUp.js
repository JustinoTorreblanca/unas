import Modal from "react-modal";
import React, { useState } from "react";

import cerrar from "../images/x.png";
import "./PopUpOtraPersona.scss";
import Agregar from "../images/agregar.png";

const PopUpAgregarOtraPersona = (props) => {

  const [buttonOtraPersona, setButtonOtraPersona] = useState(false);
 /*  const [form, setForm] = useState({  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  } */


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
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
      height: "500px",
      width: "559px",
    },
  };

  return (
    <div>
      <button
        className="boton-otra-per"
        onClick={() => setButtonOtraPersona(true)}
      >
        <img src={Agregar} alt="icon" className="icono-otra-persona" />
        <h2 className="agregar-persona">Agregar persona</h2>
      </button>

      <Modal
        isOpen={buttonOtraPersona}
        className="modal-size"
        style={modalStyles}
      >
        <div className="cont-modal">
          <div className="card-modal">
              <img
                src={cerrar}
                alt="cerrar"
                className="close-button"
                onClick={() => setButtonOtraPersona(false)}
              />
              <h1 className="h1-agregas">¿A quién agregas?</h1>
              <input type="radio" name="a quien agregas" className="radio-add" value="Persona-registrada1" id="Persona-registrada1" onChange={props.handleChange}/>
              <label className="personas" htmlFor="Persona-registrada1">Persona registrada 1</label>
              <input type="radio" name="a quien agregas" className="radio-add" value="Persona-registrada2" id="Persona-registrada2" onChange={props.handleChange} />
              <label className="personas" htmlFor="Persona-registrada2">Persona registrada 2</label>
              <input type="radio" name="a quien agregas" className="radio-add"  id="Persona-registrada3" value="Persona-registrada3" onChange={props.handleChange} />
              <label className="personas" htmlFor="Persona-registrada3">Persona registrada 3</label>
              <input type="radio" name="a quien agregas" className="radio-add" id="Nuevo-registro" value="Nuevo-registro" onChange={props.handleChange} />
              <label className="bold-registrar" htmlFor="Nuevo-registro">Registrar a alguien</label>
              <button className="continuar-btn" value="Guardar y continuar" onClick={() => [setButtonOtraPersona(false), props.setVisible(true)]}
              >
                Guardar y continuar
              </button>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default PopUpAgregarOtraPersona;
