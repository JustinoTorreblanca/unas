import React from "react";
import "./LastCard.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import logonegro from "../images/clou-negro.png";
import logoshead from "../images/logos.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="white-container">
        <img src={logonegro} className="logo-footer" alt="logo"></img>
        <h1 className="num">(55) 60 55 1450</h1>
        <h1 className="correo">info@clounailcare.com</h1>
        <div className="redes">
          <FaIcons.FaFacebook size="2rem" color="black" />
          <AiIcons.AiFillInstagram size="2rem" color="black" />
        </div>

        <input
          type="button"
          className="agendar-cita-footer"
          value="Agendar cita"
          href="/"
        />
      </div>
      <div className="headtag">
        <p className="derechos">
          ©2020 Clou. Todos los derechos reservados. Developed by
        </p>
        <img
          src={logoshead}
          href="https://headtag.mx/"
          alt="logo-head-tag"
          className="logo-head-tag"
        ></img>
      </div>
    </div>
  );
}

export default Footer;
