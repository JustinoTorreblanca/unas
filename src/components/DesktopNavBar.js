import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
/* import * as AiIcons from "react-icons/ai"; */
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import "./DesktopNavBar.scss";

import clounegro from "../images/clou-negro.png";

function NavbarNegroDesktop() {
  /* const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar); */
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className={navbar ? "dnavbar active" : "dnavbar"}>
          <Link to="/" alt="logo">
            <input
              className="logo-desk-header"
              href="/"
              type="image"
              alt="log"
              src={clounegro}
            ></input>
          </Link>
          <div className="cont-desktop-txt">
            <ol className="desktop-txt">
              <Link to="/servicios" className="anchor-servicios">
                <li className="desktop-serv">Servicios</li>
              </Link>
              <Link to="/agendar-cita" className="anchor-servicios">
                <li className="desktop-cita cita-negro">Agendar Cita</li>
              </Link>
              <Link to="/nosotros" className="anchor-servicios">
                <li className="desktop-contacto">Contacto</li>
              </Link>
              <Link to="/nosotros" className="anchor-servicios">
                <li className="desktop-nosotros">Nosotros</li>
              </Link>
            </ol>
          </div>
          <Link to="mi-cuenta" className="desk-menu-bars">
            <BiIcons.BiUserCircle size="2rem" />
          </Link>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavbarNegroDesktop;
