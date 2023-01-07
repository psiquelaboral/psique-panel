import React, { useState } from "react";
import BoardInfo from "./boardinfo/BoardInfo";
import Login from "./login/Login";
import ResetPassword from "./resetPassword/ResetPassword";
import Signup from "./signup/Signup";

import "./index.css";

const AuthPage = () => {
  const [activeView, setActiveView] = useState("login");

  const switchView = () => {
    const view = {
      login: <Login changeView={setActiveView} />,
      signup: <Signup changeView={setActiveView} />,
      resetpassword: <ResetPassword changeView={setActiveView} />,
    };

    const selected = view[activeView];
    return selected ? selected : view["signup"];
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
