import React from "react";
import BarMenu from "./barMenu/BarMenu";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-sections-container">
        <div className="logo-container">Psique</div>
        <BarMenu />
      </div>
    </div>
  );
};

export default SideBar;
