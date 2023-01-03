import React from "react";
import UserDropDown from "./UserDropDown";
import "../css/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <UserDropDown constainerStyles={{ marginRight: 25 }} />
    </div>
  );
};

export default Header;
