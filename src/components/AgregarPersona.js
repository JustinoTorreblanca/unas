import React from "react";
import "./AgregarPersona.scss";
import ximage from "../images/x.png";

function AgregarPersona(props) {
  return props.trigger ? (
    <div className="cont-focus">
      <div className="button-add-person">
        <button
          className="boton-agregar"
          onClick={() => props.setTrigger(false)}
        >
          <img src={ximage} alt="x" className="img-x" />
        </button>

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
    </div>
  ) : (
    ""
  );
}

export default AgregarPersona;
