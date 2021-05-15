import React from "react";
import NavbarNegroDesktop from "./DesktopNavBar";
import "./IniciarSesion.styles.scss";
import FooterDesktop from "./DesktopFooter";
import { Link } from 'react-router-dom'


function IniciarSesion() {
  return (
    <>
      <NavbarNegroDesktop className="navbar-desktop" />
      <div className="contenedor-agendar">
        <h1 className="datos">Inicia sesión</h1>
        <h2 className="tu-cita">para agendar tu cita</h2>

        <form className="form-iniciar-sesion">
          <input
            type="email"
            className="correo-iniciar-sesion"
            placeholder="✉ Ingresa tu correo electrónico"
          ></input>
          <input
            type="password"
            className="password"
            placeholder="&#128274; Contraseña*"
          ></input>
        </form>
        <Link to="pasos">
          <button
            type="button"
            className="agendar-cita-registro-iniciar-sesion"
            value="Agendar cita"
          >Agendar cita
          </button>
        </Link>
      </div>
      <FooterDesktop />
    </>
  );
}

export default IniciarSesion;
