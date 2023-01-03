import React from "react";
import Header from "./header/Header";
import SideBar from "./sidebar";
import "./css/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <SideBar />
      <div className="layout-body">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
