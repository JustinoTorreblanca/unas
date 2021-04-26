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
          <a href="/" alt="logo">
            <input
              className="logo-desk-header"
              href="/"
              type="image"
              alt="log"
              src={clounegro}
            ></input>
          </a>

          <ol className="desktop-txt">
            <a href="/servicios" className="anchor-servicios">
              <li className="desktop-serv">Servicios</li>
            </a>
            <a href="/agendar-cita" className="anchor-servicios">
              <li className="desktop-cita">Agendar Cita</li>
            </a>
            <a href="/contacto" className="anchor-servicios">
              <li className="desktop-contacto">Contacto</li>
            </a>
            <a href="/nosotros" className="anchor-servicios">
              <li className="desktop-nosotros">Nosotros</li>
            </a>
          </ol>
          <Link to="#" className="desk-menu-bars">
            <BiIcons.BiUserCircle size="2rem" />
          </Link>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavbarNegroDesktop;
