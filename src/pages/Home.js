import React from "react";
import "../App.css";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import Mens from "../components/Mens";
import Domicilio from "../components/Domicilio";
import Diferentes from "../components/Diferentes";
import LastCard from "../components/LastCard";

function Home() {
  return (
    <div className="App">
      <HeroSection />
      <Cards />
      <Mens />
      <Domicilio />
      <Diferentes />
      <LastCard />
    </div>
  );
}

export default Home;
