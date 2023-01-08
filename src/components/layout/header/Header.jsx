import React from "react";
import UserDropDown from "./userDropDown/UserDropDown";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <UserDropDown constainerStyles={{ marginRight: 25 }} />
    </div>
  );
};

export default Header;
