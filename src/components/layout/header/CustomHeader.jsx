import React from "react";
import UserDropDown from "./userDropDown/UserDropDown";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

// CSS
import "./header.css";

const CustomHeader = ({ collapsed, setCollapsed }) => {
  return (
    <div className="header-container">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}
      <UserDropDown constainerStyles={{ marginRight: 25 }} />
    </div>
  );
};

export default CustomHeader;
