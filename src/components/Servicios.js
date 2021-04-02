import React from "react";
import "./Servicios.scss";
import NavbarNegro from "./navbar-blanco";
/* import * as BsIcons from "react-icons/bs"; */
import imgfirst from "../images/img-first-card.png";
import imgscond from "../images/img-sec-card.png";
import imgthird from "../images/img-third-card.png";

import ContainerRosa from "./ContanierRosa";
import ForMenServicios from "./ForMenServicios";
import Marcas from "./Marcas";
import Friends from "./Friends";
import CardFlip from "./flipComponent";
import ComboSpaCard from "./ComboSpaFlipCard"
import ComboMixCard from "./ComboSpaMix"

function Servicios() {
  return (
    <>
      <NavbarNegro />
      <div className="services">
        <div className="nuestros-servicios">
          <h1 className="servicios-txt">¡Nuestros servicios!</h1>
          <h2 className="tenemos-txt">Todo lo que tenemos para ti</h2>
        </div>
        <div className="container-spa-card">
          <img src={imgfirst} alt="img" className="first-img" />

          <CardFlip />
        </div>
        <div className="container-spa-card2">
          <img src={imgscond} alt="img" className="img2" />
          <ComboSpaCard />
        </div>
        <div className="container-spa-card3">
          <img src={imgthird} alt="img" className="img3" />
          <ComboMixCard />
        </div>
        <div className="rectangle">
          <div className="cont">
            <h1 className="fuera">¡Fuera de lo común!</h1>
            <p className="acrilico">
              Pregunta por nuestra aplicación de acrílico y nuestros diseños de
              nail art
            </p>
            <p className="desde">Servicios desde $200</p>
            <a href="/agendar-cita"className="anchor-agendar">
                    <input
                      type="button"
                      className="agendar-cita-rectangle"
                      value="Agendar cita"
                    />
            </a>
          </div>
        </div>
        <ContainerRosa />
        <ForMenServicios />
        <Marcas />
        <Friends />
      </div>
    </>
  );
}

export default Servicios;
