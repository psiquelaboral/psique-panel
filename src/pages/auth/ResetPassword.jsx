import React from "react";
import "./css/resetpassword.css";

const ResetPassword = ({ changeView }) => {
  return (
    <div className="resetpassword-container">
      {/* HEADER */}
      <div className="resetpassword-header">
        <h1>Recuperar mi contraseña</h1>
        <p>
          Por favor, ingresa el correo electronico con el cual te registraste en
          Psique Psicometricos, recibiras un email con instrucciones para
          cambiar tu contraseña
        </p>
      </div>
      {/* FORM */}
      <div className="resetpassword-form">
        <form>
          {/* EMAIL */}
          <div className="login-input">
            <label> Email</label>
            <input
              type="email"
              placeholder="Correo electronico que registraste"
            />
          </div>
          {/* ACTIONS */}
          <div className="resetpassword-actions-container">
            <button className="reset-password-login-btn">
              Reiniciar contraseña
            </button>
          </div>
        </form>
      </div>
      {/* FOOTER */}
      <div className="resetpassword-footer">
        <strong
          onClick={() => {
            changeView("login");
          }}
        >
          Regresar e iniciar sesión
        </strong>
      </div>
    </div>
  );
};

export default ResetPassword;
