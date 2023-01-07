import React from "react";
import ResetPasswordForm from "../../../components/forms/resetPasswordForm/ResetPasswordForm";

// CSS
import "./resetpassword.css";

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
        <ResetPasswordForm />
      </div>
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
