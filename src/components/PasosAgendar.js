import React, { useState } from "react";
import NavbarNegroDesktop from "./DesktopNavBar";
import "./PasosAgendar.scss";
import FooterDesktop from "./DesktopFooter";
import flechapasos from "../images/iconopasos.png";
import CalendarComponent from "./CalendarComponent";
import icongray from "../images/icongray.png";
import CardMetodoPago from "./CardMetodoPago";
import CardDomicilio from "./CardDomicilio";
import AgregarPersona from "./AgregarPersona";

function PasosAgendar() {
  const [buttonAddPerson, setButtonAddPerson] = useState(false);

  return (
    <div className="agendar-container">
      <NavbarNegroDesktop className="navbar-desktop-pasos" />
      <div className="container-pasos">
        <div className="zona">
          <span className="titulo-zona">¿En qué zona te encuentras?</span>
          <img src={flechapasos} alt="flecha" className="flecha-pasos"></img>
        </div>
        <div className="wrap-radio-buttons">
          <div className="primera-seccion">
            <input type="radio" className="radio-button" name="zona" />
            <label for="Polanco">Polanco</label>
            <input type="radio" className="radio-button" name="zona" />
            <label for="Lomas">Lomas</label>
            <input type="radio" className="radio-button" name="zona" />
            <label for="Santa Fé">Santa Fé</label>
            <input type="radio" className="radio-button" name="zona" />
            <label for="Condesa">Condesa</label>
            <input type="radio" className="radio-button" name="zona" />
            <label for="Bosques">Bosques</label>
          </div>
          <div className="segunda-seccion">
            <input type="radio" className="radio-button" name="zona" />
            <label for="Interlomas">Interlomas</label>
            <input type="radio" className="radio-button" name="zona" />
            <label for="Tecamachalco">Tecamachalco</label>
            <input type="radio" className="radio-button" name="zona" />
            <label for="El Olivo">El Olivo</label>
          </div>
          <div className="tercera-seccion">
            <input
              type="radio"
              value="El Chamizal"
              className="radio-button"
              name="zona"
            />
            <label for="El Chamizal">El Chamizal</label>
            <input
              type="radio"
              value="Plaza Carzo"
              className="radio-button"
              name="zona"
            />
            <label for="Plaza Carzo">Plaza Carzo</label>
          </div>
        </div>
      </div>

      <div className="container-dia">
        <div className="zona-dia">
          <span className="titulo-dia">¿Qué día quieres agendar?</span>
          <img src={flechapasos} alt="flecha" className="flecha-pasos"></img>
        </div>
        <div className="wrap-calendar">
          <CalendarComponent />
        </div>
      </div>

      <div className="container-registro">
        <div className="registro-persona">
          <span className="titulo-registro">Registro de las personas</span>
          <img src={flechapasos} alt="flecha" className="flecha-pasos"></img>
        </div>
        <div className="wrap-nombre">
          <div className="nombre-cliente-container">
            <h1 className="nombre-cliente">Nombre cliente Clou</h1>
            <img src={icongray} alt="icon" className="icono-otra-persona"></img>
            <span className="otra-persona">Soy otra persona</span>
          </div>
          <form className="form-servicio">
            <label className="dropdown-servicio">Servicio*</label>

            <select className="opciones-servicio"></select>
            <br></br>
          </form>
          <div className="wrap-horario">
            <div className="contenedor-horario">
              <label className="dropdown-horario">Horario</label>
              <select className="opciones-horario"></select>
            </div>
            <div className="contenedor-quien">
              <label className="dropdown-quien">
                ¿Quién me dará el servicio?*
              </label>
              <select className="opciones-quien"></select>
            </div>
          </div>

          <button

               className="txt-agregar-persona"

                   onClick={() => setButtonAddPerson(true)}

          >
            +Agregar a otra persona
          </button>
          <AgregarPersona trigger={buttonAddPerson} setTrigger={setButtonAddPerson}/>
        </div>
      </div>
      <div className="es-regalo">
        <p className="regalo-txt">¿Es un regalo?</p>
        <form className="si-no">
          <input
            type="radio"
            value="si"
            className="radio-button"
            name="si-inpt"
          />
          <label for="Si">Si</label>
          <input
            type="radio"
            value="no"
            className="radio-button"
            name="si-inpt"
          />
          <label for="No">No</label>
        </form>
      </div>

      {/* DATOS PARA REGALO */}
      <div className="container-datos-regalo">
        <div className="zona-dia">
          <span className="titulo-dia titulo-regalo">Datos para regalo</span>
          <img src={flechapasos} alt="flecha" className="flecha-pasos"></img>
        </div>
        <div className="wrap-pasos-regalo">
          <div className="container-nombre-regalo">
            <label className="nombre-pasos-regalo">Nombre</label>
            <input type="text" className="nombre-regalo-inpt"></input>
          </div>
          <div className="container-correo-pasos">
            <label className="correo-pasos-regalo">Correo electrónico*</label>
            <input className="correo-regalo-inpt"></input>
          </div>
        </div>
        <div className="container-direccion-pasos">
          <label className="direccion-regalo">Dirección</label>
          <input className="direccion-regalo-inpt" />
        </div>
      </div>

      {/* METODO DE PAGO */}
      <CardMetodoPago />

      {/* DOMICILIO */}
      <CardDomicilio />

      <div className="cont-boton-guardar">
        <a href="/" className="anchor-pasos">
          <input
            type="button"
            className="agendar-guardar-pasos"
            value="Guardar y agendar cita"
            href="#"
          />
        </a>
      </div>

      <FooterDesktop />
    </div>
  );
}

export default PasosAgendar;
