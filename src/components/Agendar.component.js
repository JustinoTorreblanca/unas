import React from "react";
import NavbarNegroDesktop from "./DesktopNavBar";
import "./Agendar.styles.scss";
import FooterDesktop from "./DesktopFooter";

function Agendar() {
  return (
    <>
      <NavbarNegroDesktop className="navbar-desktop" />
      <div className="contenedor-agendar">
        <h1 className="datos">Déjanos tus datos</h1>
        <h2 className="tu-cita">para agendar tu cita</h2>

        <form className="form-registro">
          <input
            type="text"
            className="name"
            placeholder="&#x263a;Ingresa tu nombre"
          ></input>
          <input
            type="email"
            className="correo"
            placeholder="✉ Ingresa tu correo electrónico"
          ></input>
          <input
            type="tel"
            className="telephone"
            placeholder="&#9742; Teléfono*"
          ></input>
        </form>
        <a href="/pasos" className="agendar-cita-registro">
          <input
            type="button"
            className="agendar-cita-registro"
            value="Agendar cita"
            href="/pasos"
          />{" "}
        </a>
        <a href="/inicia-sesion" className="anchor-iniciar-sesion">
          <button
            type="button"
            className="inicia-sesion-registro"
            value="o inicia sesión"
          >
            o inicia sesión
          </button>
        </a>
      </div>
      <FooterDesktop />
    </>
  );
}

export default Agendar;
