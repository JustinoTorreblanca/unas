import React, {useState} from "react";
import "../App.css";
import "./HeroSection.scss";
/* import Scroll from "../components/Scroll.component"; */
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import scrll from "../images/scrll.png";
/* import Agendar from "./Agendar.component"; */
/* import back from "../images/background1440" */



function HeroSection() {
  const [datos, setDatos] = useState({
    nombre: '',
    correo: ''
  })

  const handleInputChange = (event) => {
    /* console.log(event.target.value) */
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + ' ' + datos.correo)
  }

  return (
    <div className="background">
      <div className="hero-container">
        <Navbar />
        <h1 className="tus-unas"> Tus uñas listas</h1>
        <br />
        <h2 className="dia que">el día que quieras</h2>
        <h2 className="dia cas">y sin salir de casa</h2>
        <div className="inpt">
          <form className="form-hero" onSubmit={enviarDatos}>
            <input
              type="text"
              className="nombre"
              placeholder="&#x263a; Ingresa tu nombre"
              required
              minLength="4"
              maxLength="10"
              name="nombre"
              onChange={handleInputChange}
            />
            <input
              type="email"
              className="email"
              placeholder="✉ Ingresa tu correo electrónico"
              name="correo"
              onChange={handleInputChange}
            />

            <Link to="/pasos" className="link-agendar-cita">
              <button
                type="submit"
                className="agendar-cita"
                value="Agendar cita"
              >
                Agendar cita
              </button>
            </Link>
          </form>
          <input
            type="button"
            className="inicia-sesion"
            value="o inicia sesión"
            href="/agendar-cita"
          />
          <p className="scrll">Scroll</p>
          <img src={scrll} alt="scroll" />
          {/* <Scroll /> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
