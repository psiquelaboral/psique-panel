import React from "react";
import LoginForm from "../../components/forms/loginForm/LoginForm";
import "./css/login.css";

const Login = ({ changeView }) => {
  return (
    <div className="login-container">
      {/* HEADER */}
      <div className="login-header-container">
        <h1>Iniciar sesión</h1>
        <p>
          Bienvenido a Psique Psicometricos, por favor ingresa tus credenciales
        </p>
        <p>para entrar a tu panel</p>
      </div>
      {/* FORM */}
      <div className="login-form-container">
        <LoginForm changeView={changeView} />
      </div>
      {/* FOOTER */}
      <div className="login-footer-container">
        <p>
          ¿Aún no tienes una cuenta? <strong>Crear cuenta</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
