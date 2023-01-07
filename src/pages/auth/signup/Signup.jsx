import React from "react";

import SignupForm from "../../../components/forms/signupForm/SignupForm";

// CSS
import "./signup.css";

const Signup = ({ changeView }) => {
  return (
    <div className="signup-container">
      {/* HEADER */}
      <div className="signup-header-container">
        <h1>Crear cuenta</h1>
        <p>
          Crea una cuenta y obten acceso a formularios especializados para
          realizar psicometricos
        </p>
      </div>

      {/* FORM */}
      <div className="signup-form-container">
        <SignupForm />
      </div>

      {/* FOOTER */}
      <div className="signup-footer-container">
        <p>
          ¿Ya tienes una cuenta?{" "}
          <strong
            onClick={() => {
              changeView("login");
            }}
          >
            Inicia sesion
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Signup;
