import React, { useState, useEffect } from "react";
import DesktopNavBar from "./DesktopNavBar";
import NavbarNegro from "./navbar-blanco";

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListenter("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function CustomNavBar(size) {
  return size >= 768 ? <DesktopNavBar /> : <NavbarNegro />;
}

export default CustomNavBar;
