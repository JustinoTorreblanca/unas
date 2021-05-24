import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./NavbarNegro.scss";
import Home from "../pages/Home";
import clounegro from "../images/clou-negro.png";
import logonosotros from "../images/clou negro.png";

function NavbarNegro() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
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
        <div className={navbar ? "navbar active" : "navbar"}>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars size="2rem" color="black" onClick={showSidebar} />
          </Link>
          <Link to={Home} alt="logo">
            <input
              className="logo-header"
              href="/"
              type="image"
              alt="log"
              src={logonosotros}
            ></input>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose size="2rem" />
              </Link>
              <Link to={Home}>
                      <img
                        src={clounegro}
                        alt="logo"
                        className="logo-negro"
                        href="/home"
                      ></img>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarNegro;
