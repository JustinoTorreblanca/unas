import React from "react";
import "./DesktopFooter.scss";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import logonegro from "../images/clou-negro.png";
import logoshead from "../images/logos.png";

function FooterDesktop() {
  return (
    <div className="footer-container-desktop">
      <div className="white-container-desktop">
        <img src={logonegro} className="logo-footer-desktop" alt="logo"></img>
        <h1 className="num-desktop">(55) 60 55 1450</h1>
        <h1 className="correo-desktop">info@clounailcare.com</h1>
        <div className="redes-desktop">
          <FaIcons.FaFacebook size="2rem" color="black" className="fb" />
          <AiIcons.AiFillInstagram size="2rem" color="black" className="ig" />
        </div>

        <input
          type="button"
          className="agendar-cita-footer-desktop"
          value="Agendar cita"
          href="/"
        />
      </div>

      <div className="headtag-desktop">
        <p className="derechos-desktop">
          ©2020 Clou. Todos los derechos reservados. Developed by
        </p>
        <img
          src={logoshead}
          href="https://headtag.mx/"
          alt="logo-head-tag"
          className="logo-head-tag-desktop"
        ></img>
      </div>
    </div>
  );
}

export default FooterDesktop;
