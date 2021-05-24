import Modal from "react-modal";
import React, { useState } from "react";
import icongray from "../images/icongray.png";
import cerrar from "../images/x.png";
import "./PopUpOtraPersona.scss";


function PopUpOtraPersona( props ){
  const [buttonOtraPersona, setButtonOtraPersona] = useState(false);
  /* const [visible, setVisible] = useState(false); */

  /* const handleVisible = () => {
    setVisible(true)
  } */

  /* const [form, setForm] = useState({ }); */

 /*  const handleChange = (e) => {
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
        className="boton-otra-persona"
        onClick={() => setButtonOtraPersona(true)}
      >
        <img src={icongray} alt="icon" className="icono-otra-persona" />
        <h2 className="otra-persona">Soy otra persona</h2>
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
              <h1 className="h1-agregas">¿Quién eres?</h1>
              <input type="radio" name="soy otra persona" className="radio-add" value="persona-registrada1"id="persona-registrada1" onChange={props.handleChange} />
              <label className="personas" htmlFor="persona-registrada1">Persona registrada 1</label>
              <input type="radio" name="soy otra persona" className="radio-add" id="persona-registrada2" value="persona-registrada2" onChange={props.handleChange} />
              <label className="personas" htmlFor="persona-registrada2">Persona registrada 2</label>
              <input type="radio" name="soy otra persona" className="radio-add" value="persona-registrada3" id="persona-registrada3" onChange={props.handleChange} />
              <label className="personas" htmlFor="persona-registrada3">Persona registrada 3</label>
              <input type="radio" name="soy otra persona" className="radio-add" id="nuevo-registro"value="nuevo-registro" onChange={props.handleChange} />
              <label className="bold-registrar" htmlFor="nuevo-registro">Nuevo registro</label>

              <button className="continuar-btn" value="Guardar y continuar"  /* onClick={() => setButtonOtraPersona(false)} */ onClick={() => [setButtonOtraPersona(false), props.setVisible(true)]} >
                {/* {visible ? <NuevoRegistro /> : null} */}
                Guardar y continuar
              </button>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default PopUpOtraPersona;






































































































