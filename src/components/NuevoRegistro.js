import React from "react";

import "./NuevoRegistro.Syles.scss";
import trash from "../images/trash.png";

function NuevoRegistro(props) {
  return (
    <div className="container-nuevo-registro">
      <hr className="hr-registro" />

      <div className="wrap-nombre-nuevo-reg">
        <div className="nombre-cliente-container">
          <h1 className="nombre-cliente-nuevo-reg">Registro Nuevo</h1>
          <button
            className="eliminar-persona"
            onClick={() => [props.setVisible(false)]}
          >
            <img alt="bote" src={trash} className="img-trash" />
            Eliminar Persona
          </button>
        </div>
        <form className="form-servicio">
          <div className="wrap-nombre-registro">
            <div className="nombre-nuevo-registro">
              <label className="nombre-nuevo-reg">Nombre</label>
              <input
                type="text"
                className="nombre-registro-inpt"
                name="nombre nuevo registro"
                onChange={
                  props.handleChange
                } /* ref={register({required: {value: true, message: 'Campo Requerido'}})} */
              ></input>
            </div>
            <div className="select-nuevo-registro">
              <label className="dropdown-servicio-nuevo">Servicio*</label>
              <select
                className="opciones-nuevo-reg"
                defaultValue=""
                onChange={props.handleChange}
                name="servicio nuevo registro"
              >
                <option value="">- - -</option>
                <option value="Spa polish">Combo Spa Polish</option>
                <option value="Spa gel">Combo Spa Gel</option>
                <option value="Spa mix">Combo Spa Mix</option>
                <option value="Combo spa">Combo Spa</option>
              </select>
            </div>
            <br></br>
          </div>
        </form>

        <div className="wrap-horario">
          <div className="contenedor-horario">
            <label className="dropdown-horario">Horario</label>
            <select
              className="opciones-horario"
              defaultValue=""
              onChange={props.handleChange}
              name="horario nuevo registro"
            >
              <option value="">- - -</option>
              <option value="14">14:00hrs</option>
              <option value="15">15:00hrs</option>
              <option value="16">16:00hrs</option>
              <option value="17">17:00hrs</option>
              <option value="18">18:00hrs</option>
              <option value="19">19:00hrs</option>
              <option value="20">20:00hrs</option>
            </select>
          </div>
          <div className="contenedor-quien">
            <label className="dropdown-quien">
              ¿Quién me dará el servicio?*
            </label>
            <select
              className="opciones-quien"
              defaultValue=""
              onChange={props.handleChange}
              name="quien nuevo registro"
            >
              <option value="">- - -</option>
              <option value="Elisa">Elisa</option>
              <option value="Alejandra">Alejandra</option>
              <option value="Angeles">Angeles</option>
              <option value="Dani">Dani</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuevoRegistro;
