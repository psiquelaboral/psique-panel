import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faChartBar,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";

// CSS
import "./barmenu.css";

const MenuItem = ({ title, icon, path }) => {
  const navigation = useNavigate();
  return (
    <div
      className="menuitem-container"
      onClick={() => {
        console.group(path);
        navigation(path);
      }}
    >
      <FontAwesomeIcon style={{ fontSize: 14, marginRight: 10 }} icon={icon} />
      <p>{title}</p>
    </div>
  );
};

const SideBarSection = ({ title }) => (
  <p className="sidebar-divider-text">{title}</p>
);

const BarMenu = () => {
  return (
    <div className="menu-container">
      <SideBarSection title="Menú" />
      <MenuItem title="Inicio" icon={faHome} path="/" />
      <MenuItem title="Empleados" icon={faUsers} path="/employe" />
      <MenuItem title="Psicométricos" icon={faChartBar} path="/employe" />
      <SideBarSection title="Settings" />
      <MenuItem title="Configuración" icon={faUserCog} path="/employe" />
    </div>
  );
};

export default BarMenu;
