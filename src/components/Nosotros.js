import React from "react";
import DesktopNavbar from "./DesktopNavBar";
import "./Nosotros.scss";
import WhiteCard from "./WhiteCard";
import Conocelas from "./Conocelas";
import LastCard from "./LastCard";

function Nosotros() {
  return (
    <>
      <div className="background-nosotros">
        <DesktopNavbar />
        <h1 className="nosotros-titulo">¿Quiénes somos?</h1>
        <p className="nosotros-txt">
          Clou nace para dar oportunidad a quienes necesitan generar ingresos
          para mantener y/o apoyar sus hogares.
        </p>
      </div>
      <WhiteCard />
      <div className="pink-card">
        <p className="pink-card-txt">
          Nuestra misión es generarles trabajo, es por esa razón que
          dessarrollamos esta plataforma donde podemos promover su talento.
        </p>
      </div>
      <Conocelas />
      <LastCard />
    </>
  );
}

export default Nosotros;
