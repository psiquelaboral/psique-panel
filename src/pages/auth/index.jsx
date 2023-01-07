import React, { useState } from "react";
import BoardInfo from "./BoardInfo";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";

import "./css/page.css";

const AuthPage = () => {
  const [activeView, setActiveView] = useState("login");

  const switchView = () => {
    const view = {
      login: <Login changeView={setActiveView} />,
      signup: <Signup />,
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
