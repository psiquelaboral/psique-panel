import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import profileImage from "../../../../img/profile.jpeg";
import "./userdropdown.css";

const UserInfoMenu = ({ constainerStyles }) => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();
  return (
    <div className="full-container-dropdown" style={{ ...constainerStyles }}>
      {/* USER INFORMATION */}
      <div className="user-info-container">
        {/* USER IMAGE */}
        <img className="image-profile" src={profileImage} alt="user profile" />
        {/* USER INFO */}
        <div className="user-data">
          <p className="name">Joaquin Coronado</p>
          <p className="email">joaquin@hotmail.com</p>
        </div>
        {/* OPEN ARROW */}
        <div
          className="menu-button-container"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FontAwesomeIcon
            style={{ fontSize: 14, color: "#fff" }}
            icon={open ? faAngleUp : faAngleDown}
          />
        </div>
      </div>
      {/* DROPDOWN MENU */}
      <div className={`dropdown-container ${open ? "active" : "inactive"}`}>
        <span>Mis subscripciones</span>
        <span>Acerca de nosotros</span>
        <span
          onClick={() => {
            navigation("/login");
          }}
        >
          Cerrar session
        </span>
      </div>
      {open ? (
        <div
          className="dropdown-wrapper"
          onClick={() => {
            console.log("test");
            setOpen(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default UserInfoMenu;
