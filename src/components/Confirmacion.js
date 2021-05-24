import React from "react";
import FooterDesktop from "./DesktopFooter";
import NavbarNegroDesktop from "./DesktopNavBar";
import { Link } from "react-router-dom";
import "./Confirmacion.styles.scss";

function Confirmacion() {
  return (
    <>
      <NavbarNegroDesktop className="navbar-desktop" />
      <div className="contenedor-confirmacion">
        <h1 className="tu-cita-registrada">
          ¡Tu cita quedó registrada correctamente!{" "}
        </h1>
        <h2 className="detalles">
          Pronto recibiras los detalles en tu coreo electrónico.
        </h2>
        <h1 className="ingresa-contrasena">
          ¡Para que la próxima vez ingreses más rápido, registra una contraseña!
        </h1>

        <form className="form-confirmacion">
          <input
            type="password"
            className="password"
            placeholder="&#128274; Contraseña*"
          ></input>
        </form>
        <Link to="mi-cuenta" className="pasos-btn">
          <button
            type="button"
            className="agendar-cita-registro-iniciar-sesion"
            value="Agendar cita"
          >
            Guardar y ver cita
          </button>
        </Link>
      </div>
      <FooterDesktop />
    </>
  );
}

export default Confirmacion;
