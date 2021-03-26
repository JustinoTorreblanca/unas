import React from "react";
import "../App.css";
import "./HeroSection.css";
import Scroll from "../components/Scroll.component";
/* import { Link } from "react-router-dom"; */
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div className="background">
      <div className="hero-container">
        <Navbar />
        <h1 className="tus-unas"> Tus uñas listas</h1>
        <br />
        <h2 className="dia">el día que quieras</h2>
        <h2 className="dia">y sin salir de casa</h2>
        <div className="inpt">
          <input
            type="text"
            className="nombre"
            placeholder="&#x263a; Ingresa tu nombre"
            required
            minLength="4"
            maxLength="10"
          />
          <input
            type="email"
            className="email"
            placeholder="✉ Ingresa tu correo electrónico"
          />
          <input
            type="button"
            className="agendar-cita"
            value="Agendar cita"
            href="/"
          />

          <input
            type="button"
            className="inicia-sesion"
            value="o inicia sesión"
            href="/"
          />
          <p className="scrll">Scroll</p>
          <Scroll />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
