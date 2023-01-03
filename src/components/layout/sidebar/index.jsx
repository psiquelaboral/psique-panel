import React from "react";
import BarMenu from "./BarMenu";
import "../css/sidebar.css";
import footerImage from "../../../img/sidebar_footer.svg";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-sections-container">
        <div className="logo-container">Psique</div>
        <BarMenu />
      </div>
      <img className="sidebar-image" src={footerImage} alt="footer" />
    </div>
  );
};

export default SideBar;
