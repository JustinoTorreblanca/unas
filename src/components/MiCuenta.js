import React, { useState } from "react";
import FooterDesktop from "./DesktopFooter";
import NavbarNegroDesktop from "./DesktopNavBar";
import "./MiCuenta.Styles.scss";
import "./CardDomicilio.scss";
import SmileFace from "../images/smile-face.png";
import Direcc from "../images/direcc.png";
import Telefono from "../images/telefono.png";
import Candado from "../images/contrasena.png";
import Correo from "../images/correo.png";
import trash from "../images/trash.png";
import Agregar from "../images/agregar.png";
import MisCitas from "./MisCitas";

function MiCuenta() {
  const [nombre, setNombre] = useState(false);
  const [direccion, setDireccion] = useState(false);

  return (
    <>
      <NavbarNegroDesktop />
      <div className="contenedor-mi-cuenta">
        <div className="mi-cuenta">
          <h1 className="cuenta-h1">Mi cuenta</h1>
          <form>
            <img src={SmileFace} alt="img" className="img-nombre" />
            <input
              type="text"
              placeholder="Mi nombre"
              className="inpt-cuenta"
            />
            <img src={Direcc} alt="img" className="img-direcc" />
            <input
              type="text"
              placeholder="Mi dirección"
              className="inpt-cuenta"
            />
            <img src={Telefono} alt="img" className="img-telefono" />
            <input
              type="text"
              placeholder="Mi teléfono"
              className="inpt-cuenta"
            />
            <img src={Correo} alt="img" className="img-correo" />
            <input
              type="text"
              placeholder="Mi correo electrónico"
              className="inpt-cuenta"
            />
            <img src={Candado} alt="img" className="img-candado" />
            <input
              type="text"
              placeholder="Mi contraseña"
              className="inpt-cuenta"
            />
          </form>
          <button className="btn-guardar-cambios">Guardar Cambios</button>
        </div>

        {/* MIS REGISTROS */}
        <div className="mis-registros">
          <h1 className="cuenta-h1">Mis registros</h1>
          <button className="btn-eliminar" onClick={() => setNombre(false)}>
            <img src={trash} alt="trash" className="eliminar-direcc"></img>
            Eliminar
          </button>
          <input
            type="radio"
            name="soy otra persona"
            className="radio-add-cuenta"
            value="persona-registrada1"
            id="persona-registrada1" /* onChange={props.handleChange} */
          />
          <label className="personas-cuenta" htmlFor="persona-registrada1">
            Persona registrada 1
          </label>
          <br />
          <input
            type="radio"
            name="soy otra persona"
            className="radio-add-cuenta"
            id="persona-registrada2"
            value="persona-registrada2" /* onChange={props.handleChange} */
          />
          <label className="personas-cuenta" htmlFor="persona-registrada2">
            Persona registrada 2
          </label>
          <br />
          <input
            type="radio"
            name="soy otra persona"
            className="radio-add-cuenta"
            value="persona-registrada3"
            id="persona-registrada3" /* onChange={props.handleChange} */
          />
          <label className="personas-cuenta" htmlFor="persona-registrada3">
            Persona registrada 3
          </label>
          <br />
          {nombre ? (
            <input
              type="text"
              name="nombre nueva persona"
              className="nomb-nueva-persona"
              placeholder="Nombre persona nueva"
              id="nueva-persona"
            />
          ) : null}
          <button
            className="boton-otra-per-cuent"
            onClick={() => setNombre(true)}
          >
            <img
              src={Agregar}
              alt="icon"
              className="icono-otra-persona-cuenta"
            />
            <h2 className="registro-otra-per">Registrar a otra persona</h2>
          </button>

          <button className="btn-guardar-cambios">Guardar Cambios</button>
        </div>

        {/* MIS DIRECCIONES */}
        <div className="mis-registros mi-dir">
          <h1 className="cuenta-h1">Mis direcciones</h1>
          <button className="btn-eliminar" onClick={() => setDireccion(false)}>
            <img src={trash} alt="trash" className="eliminar-direcc"></img>
            Eliminar
          </button>
          <input
            type="radio"
            name="soy otra persona"
            className="radio-add-cuenta"
            value="persona-registrada1"
            id="persona-registrada1" /* onChange={props.handleChange} */
          />
          <label className="personas-cuenta" htmlFor="persona-registrada1">
            Dirección 1
          </label>
          <br />
          <input
            type="radio"
            name="soy otra persona"
            className="radio-add-cuenta"
            id="persona-registrada2"
            value="persona-registrada2" /* onChange={props.handleChange} */
          />
          <label className="personas-cuenta" htmlFor="persona-registrada2">
            Dirección 2
          </label>
          <br />
          <input
            type="radio"
            name="soy otra persona"
            className="radio-add-cuenta"
            value="persona-registrada3"
            id="persona-registrada3" /* onChange={props.handleChange} */
          />
          <label className="personas-cuenta" htmlFor="persona-registrada3">
            Dirección 3
          </label>
          <br />
          {direccion ? (
            <div className="nueva-dir">
              <div className="cont-domic"></div>
              <div className="contenedor-inputs">
                <div className="txt-calle-pasos">
                  <div className="calle-pasos">
                    <label className="txt-pas">Calle*</label>
                    <input
                      type="text"
                      className="txt-calle"
                      /* onChange={props.handleChange} */ name="calle"
                    />
                  </div>
                  <div className="cp-pasos">
                    <label className="txt-pas">CP</label>
                    <input
                      type="number"
                      className="txt-cp"
                      /* onChange={props.handleChange} */ name="CP"
                    />
                  </div>
                  <div className="fracc">
                    <label className="txt-pas">Fraccionamiento</label>
                    <input
                      type="text"
                      className="txt-fracc"
                      /* onChange={props.handleChange} */ name="fraccionamiento"
                    />
                  </div>
                </div>
                <div className="wrap-num-colonia">
                  <div className="numero-pasos">
                    <label className="txt-pas">Número</label>
                    <input
                      type="number"
                      className="txt-col"
                      /* onChange={props.handleChange} */ name="numero exterior"
                    />
                  </div>
                  <div className="colonia-pasos">
                    <label className="txt-pas">Colonia*</label>
                    <input
                      type="text"
                      className="txt-num"
                      /* onChange={props.handleChange} */ name="colonia"
                    />
                  </div>
                  <label className="txt-requiere">
                    ¿Se requiere pasar por caseta?
                  </label>
                  <div className="inpts-caseta">
                    <input
                      type="radio"
                      className="txt-caseta"
                      name="caseta"
                      /* onChange={props.handleChange} */ value="si"
                      id="yes"
                    />
                    <label className="txt-si" htmlFor="yes">
                      Si
                    </label>
                    <input
                      type="radio"
                      className="txt-caseta"
                      name="caseta"
                      /* onChange={props.handleChange} */ value="no"
                      id="not"
                    />
                    <label className="txt" htmlFor="not">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <button
            className="boton-otra-per-cuent"
            onClick={() => setDireccion(true)}
          >
            <img
              src={Agregar}
              alt="icon"
              className="icono-otra-persona-cuenta"
            />
            <h2 className="registro-otra-per">Agregar otra dirección</h2>
          </button>
          <button className="btn-guardar-cambios">Guardar Dirección</button>
        </div>
        <MisCitas />
      </div>
      <FooterDesktop />
    </>
  );
}

export default MiCuenta;
