import React from "react";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Servicios",
    path: "/servicios",
    cName: "nav-text",
  },
  {
    title: "Agendar Cita",
    path: "/agendar-cita",
    cName: "nav-text",
  },
  {
    title: "Contacto",
    path: "/contacto",
    cName: "nav-text",
  },
  {
    title: "Nosotros",
    path: "/nosotros",
    cName: "nav-text",
  },
  {
    title: "",
    path: "/cuenta",
    icon: <BiIcons.BiUserCircle size="2rem" />,
    cName: "nav-text",
  },
];
