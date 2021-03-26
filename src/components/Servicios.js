import React from "react";
import "./Servicios.scss";
import NavbarNegro from "./navbar-blanco";
/* import * as BsIcons from "react-icons/bs"; */
import imgfirst from "../images/img-first-card.png";
import imgscond from "../images/img-sec-card.png";
import imgthird from "../images/img-third-card.png";
/* import rectangle from "../images/rectangle.png";
import FrontFlipCard from "./Front-flipCard";
import BackflipCard from "./Back-flipCard"; */
import ContainerRosa from "./ContanierRosa";
import ForMenServicios from "./ForMenServicios";
import Marcas from "./Marcas";
import Friends from "./Friends";
import CardFlip from "./flipComponent";

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
          {/* {flip ? <FrontFlipCard /> : <BackflipCard />} */}
          {/* <div className="services-front">
              <h1 className="h3 card-services-titulo">Combo Spa Polish</h1>
              <span className="h4 card-services-price">$750</span>
              <span className="card-services-info">Más información</span>
            </div> */}
          {/* <div className="services-back">
                <span className="titulo">Manicure Spa Polish</span>
                <p className="sub-titulo">
                  Limado y forma + cuidado de cutícula + exfoliante OPI + crema
                  OPI + esmalte OPI
                </p>
                <span className="titulo-dos">Pedicure Spa Polish</span>
                <p className="sub-titulo-dos">
                  Limado y forma + cuidado de cutícula masaje en tina shiatsu +
                  exfoliante OPI + crema OPI + esmalte OPI
                </p>
                <div>
                  <button>
                    <BsIcons.BsArrowRepeat size="2rem" color="white" />
                  </button> */}
          {/* AQUI VOY ^^^ */}
          {/* </div>
              </div> */}
        </div>
        <div className="container-spa-card2">
          <img src={imgscond} alt="img" className="img2" />
          <div className="second-card">
            <h1 className="h3 card-services-titulo">Combo Spa Gel</h1>
            <span className="h4 card-services-price">$950</span>
            <span className="card-services-info">Más información</span>
          </div>
        </div>
        <div className="container-spa-card3">
          <img src={imgthird} alt="img" className="img3" />
          <div className="third-card">
            <h1 className="h3 card-services-titulo">Combo Spa Mix</h1>
            <span className="h4 card-services-price">$850</span>
            <span className="card-services-info">Más información</span>
          </div>
        </div>
        <div className="rectangle">
          <div className="cont">
            <h1 className="fuera">¡Fuera de lo común!</h1>
            <p className="acrilico">
              Pregunta por nuestra aplicación de acrílico y nuestros diseños de
              nail art
            </p>
            <p className="desde">Servicios desde $200</p>
            <input
              type="button"
              className="agendar-cita-rectangle"
              value="Agendar cita"
              href="/"
            />
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
