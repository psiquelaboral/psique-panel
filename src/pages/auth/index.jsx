import React, { useState } from "react";
import BoardInfo from "./BoardInfo";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";

import "./css/page.css";

const AuthPage = () => {
  const [activeView, setActiveView] = useState("login");

  const switchView = () => {
    switch (activeView) {
      case "login":
        return <Login changeView={setActiveView} />;
      case "signup":
        return <Signup />;
      case "resetpassword":
        return <ResetPassword changeView={setActiveView} />;
      default:
        return <Login changeView={setActiveView} />;
    }
  };

  return (
    <div className="auth-container">
      <div className="section-a">{switchView()}</div>
      <div className="section-b">
        <BoardInfo />
      </div>
    </div>
  );
};

export default AuthPage;
