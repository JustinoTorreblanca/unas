import React, {useState} from "react";
import NavbarNegroDesktop from "./DesktopNavBar";
import "./Agendar.styles.scss";
import FooterDesktop from "./DesktopFooter";
import {Link} from "react-router-dom";



function Agendar() {
  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    telefono: ''
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre, datos.correo, datos.telefono)
  }

  return (
    <>
      <NavbarNegroDesktop className="navbar-desktop" />

      <div className="contenedor-agendar">
        <h1 className="datos">Déjanos tus datos</h1>
        <h2 className="tu-cita">para agendar tu cita</h2>

        <form className="form-registro" onSubmit={enviarDatos}>
          <input
            type="text"
            name="nombre"
            className="name"
            placeholder="&#x263a;Ingresa tu nombre"
            onChange={handleInputChange}
          ></input>
          <input
            type="email"
            name="correo"
            className="correo"
            placeholder="✉ Ingresa tu correo electrónico"
            onChange={handleInputChange}
          ></input>
          <input
            type="tel"
            name="telefono"
            className="telephone"
            placeholder="&#9742; Teléfono*"
            onChange={handleInputChange}
          ></input>
            <Link to="/pasos">
              <input
                type="submit"
                className="agendar-cita-registro"
                value="Agendar cita"
              />
            </Link>

        </form>
        <Link to="/inicia-sesion" >
       {/*  <a href="/inicia-sesion" className="anchor-iniciar-sesion"> */}
          <button
            type="button"
            className="inicia-sesion-registro"
            value="o inicia sesión"
          >
            o inicia sesión
          </button>
        </Link>
      </div>
      <FooterDesktop />
    </>
  );
}

export default Agendar;
