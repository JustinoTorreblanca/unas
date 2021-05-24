import React, { useState } from "react";
import "./MisCitas.styles.scss";
import modificar from "../images/modificar.png";
import cancelar from "../images/cancelar.png";
import smile from "../images/smile-face.png";
import neutral from "../images/neutral.png";
import sad from "../images/sad.png";
import flechaizq from "../images/flechaizq.png";
import flechader from "../images/flechader.png";
import trash from "../images/trash.png";
import Agregar from "../images/agregar.png";
import ModalEliminarServ from "./ModalEliminarServ";
import ModalCancelarCita from "./ModalCancelarCita";
import ModalSmileFace from "./ModalSmileFace";
import ModalNeutralFace from "./ModalNeutralFace";
import ModalSadFace from "./ModalSadFace";

function MisCitas() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [open, setOpen] = useState(false);
  const [cancelarCita, setCancelarCita] = useState(false);
  const [smileFace, setSmile] = useState(false);
  const [neutralFace, setNeutral] = useState(false);
  const [sadFace, setSad] = useState(false);

  return (
    <>
      <div className="mis-citas">
        <h1 className="mis-citas-h1">Mis citas</h1>
        <div className="cita1-2">
          {/* CITA 1 */}
          <div className={visible1 ? "cont-cita1" : "contenedor-chico"}>
            <div className="cont-cita-btns cont-cita1">
              <div className="cita1">
                <div className="cita-caras">
                  <h1 className="cita-h1">Cita 1</h1>
                  <button className="btn-smile" onClick={() => setSmile(true)}>
                    <img src={smile} alt="smile" className="faces" />
                  </button>
                  <button
                    className="btn-neutral"
                    onClick={() => setNeutral(true)}
                  >
                    <img src={neutral} alt="neutral" className="faces" />
                  </button>
                  <button className="btn-sad" onClick={() => setSad(true)}>
                    <img src={sad} alt="sad" className="faces" />
                  </button>
                </div>
                <br />
                <span className="span-cita">Fecha y hora</span>
                <span className="span-cita">Dirección</span>
                <span className="span-cita">Servicio</span>

                <select className="select-servicio" size="303px">
                  <option className="servicio0" selected="" disabled="">
                    Servicio
                  </option>
                  <option className="bold-serv" value="serv-1">
                    Servicio 1
                  </option>
                  <option className="bold-serv" value="serv-2">
                    Servicio 2
                  </option>
                </select>

                <button
                  className="eliminar-serv elim1"
                  onClick={() => setOpen(true)}
                >
                  <img className="eliminar-serv-img" alt="img" src={trash} />
                </button>
                <button className="btn-add-serv add-serv1">
                  <img
                    src={Agregar}
                    alt="icon"
                    className="icono-otra-persona-cuenta"
                  />
                  <h2 className="registro-otra-per">Servicio</h2>
                </button>
                <select className="select-servicio">
                  <option className="servicio0" selected="" disabled="">
                    Servicio
                  </option>
                  <option className="bold-serv" value="serv-1">
                    Servicio 1
                  </option>
                  <option className="bold-serv" value="serv-2">
                    Servicio 2
                  </option>
                </select>
                <button
                  className="eliminar-serv2 elim2"
                  onClick={() => setOpen(true)}
                >
                  <img className="eliminar-serv-img" alt="img" src={trash} />
                </button>

                <span className="span-cita">Personas</span>
                <span className="span-cita">Método de pago</span>
              </div>
              <div className="cont-btns-cita1">
                <button className="btn-guardar-cambios btn-cita">
                  Guardar cambios
                </button>
                <button
                  className="btn-modificar"
                  onClick={() => setVisible1(true)}
                >
                  <img src={modificar} alt="modificar" className="modificar" />
                  <h3 className="modificar-cita">Modificar</h3>
                </button>

                <button
                  className="btn-cancelar"
                  onClick={() => setCancelarCita(true)}
                >
                  <img src={cancelar} alt="cancelar" className="cancelar" />
                  <h3 className="cancelar-h3">Cancelar</h3>
                </button>
              </div>
            </div>
          </div>

          {/* CITA 2 */}
          <div className={visible2 ? "contenedor-citas2" : "contenedor-chico2"}>
            <div className="cont-cita-btns cont-cita2">
              <div className="cita1">
                <div className="cita-caras">
                  <h1 className="cita-h1">Cita 2</h1>
                  <button onClick={() => setSmile(true)} className="btn-smile">
                    <img src={smile} alt="smile" className="faces" />
                  </button>
                  <button
                    className="btn-neutral"
                    onClick={() => setNeutral(true)}
                  >
                    <img src={neutral} alt="neutral" className="faces" />
                  </button>
                  <button className="btn-sad" onClick={() => setSad(true)}>
                    <img src={sad} alt="sad" className="faces" />
                  </button>
                </div>
                <br />
                <span className="span-cita">Fecha y hora</span>
                <span className="span-cita">Dirección</span>
                <span className="span-cita">Servicio</span>

                <select className="select-servicio">
                  <option className="servicio0" selected="" disabled="">
                    Servicio
                  </option>
                  <option className="bold-serv" value="serv-1">
                    {" "}
                    Servicio 1{" "}
                  </option>
                  <option className="bold-serv" value="serv-2">
                    {" "}
                    Servicio 2{" "}
                  </option>
                </select>
                <button
                  className="eliminar-serv elim3"
                  onClick={() => setOpen(true)}
                >
                  <img className="eliminar-serv-img" alt="img" src={trash} />
                </button>
                <button className="btn-add-serv add-serv2">
                  <img
                    src={Agregar}
                    alt="icon"
                    className="icono-otra-persona-cuenta"
                  />
                  <h2 className="registro-otra-per">Servicio</h2>
                </button>

                <select className="select-servicio">
                  <option className="servicio0" selected="" disabled="">
                    Servicio
                  </option>
                  <option className="bold-serv" value="serv-1">
                    Servicio 1
                  </option>
                  <option className="bold-serv" value="serv-2">
                    Servicio 2
                  </option>
                </select>
                <button
                  className="eliminar-serv2 elim4"
                  onClick={() => setOpen(true)}
                >
                  <img className="eliminar-serv-img" alt="img" src={trash} />
                </button>

                <span className="span-cita">Personas</span>
                <span className="span-cita">Método de pago</span>
              </div>

              <div className="cont-btns-cita2">
                <button className="btn-guardar-cambios btn-cita">
                  Guardar cambios
                </button>
                <button
                  className="btn-modificar"
                  onClick={() => setVisible2(true)}
                >
                  <img src={modificar} alt="modificar" className="modificar" />
                  <h3 className="modificar-cita">Modificar</h3>
                </button>
                <button
                  className="btn-cancelar"
                  onClick={() => setCancelarCita(true)}
                >
                  <img src={cancelar} alt="cancelar" className="cancelar" />
                  <h3 className="cancelar-h3">Cancelar</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-ver-mas">
          <img src={flechaizq} alt="flechaizq" className="flecha-izq" />
          Ver más citas
          <img src={flechader} alt="flechaizq" className="flecha-der" />
        </div>

        {open ? <ModalEliminarServ setOpen={setOpen} /> : null}
        {cancelarCita ? (
          <ModalCancelarCita
            setCancelarCita={setCancelarCita}
            setVisible1={setVisible1}
            setVisible2={setVisible2}
          />
        ) : null}
        {smileFace ? <ModalSmileFace setSmile={setSmile} /> : null}
        {neutralFace ? <ModalNeutralFace setNeutral={setNeutral} /> : null}
        {sadFace ? <ModalSadFace setSad={setSad} /> : null}
      </div>
    </>
  );
}

export default MisCitas;
