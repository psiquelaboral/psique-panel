import React from "react";
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
      <div className="form-container">
        <form className="login-form">
          {/* INPUTS */}
          <div className="login-input">
            <label> Email</label>
            <input type="email" placeholder="Ingresa tu correo electronico" />
          </div>
          <div className="login-input">
            <label> Contraseña</label>
            <input
              type="password"
              placeholder="La Contraseña con la que te registraste"
            />
          </div>
          {/* FORGOT PASSWORD */}
          <div className="forgot-password-container">
            <span
              onClick={() => {
                changeView("resetpassword");
              }}
            >
              Olvidaste tu contraseña?
            </span>
          </div>
          {/* ACTIONS */}
          <div className="login-actions-container">
            <div className="rememberme-checkbox">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember">Recuerdame</label>
            </div>
            <button className="login-btn">Iniciar sesión</button>
          </div>
        </form>
      </div>
      {/* FOOTER */}
      <div className="login-footer-container">
        <p>
          Aún no tienes una cuenta? <strong>Crear cuenta</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
