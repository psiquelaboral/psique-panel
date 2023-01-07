import React from "react";

import Button from "../../components/button/Button";
import Form from "../../components/form/form/Form";
import TextInput from "../../components/form/input/textinput/TextInput";
import "./css/login.css";

const Login = ({ changeView }) => {
  const FormFooter = () => {
    return (
      <>
        <div className="forgot-password-container">
          <span
            onClick={() => {
              changeView("resetpassword");
            }}
          >
            ¿Olvidaste tu contraseña?
          </span>
        </div>
        <div className="login-actions-container">
          <div className="rememberme-checkbox">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">Recuerdame</label>
          </div>
          <Button text="Iniciar sesión" />
        </div>
      </>
    );
  };

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
        <Form disableSubmit FooterComponent={<FormFooter />}>
          <TextInput
            oneline
            type="email"
            label="Email"
            placeholder="Ingresa tu correo electronico"
          />
          <TextInput
            oneline
            type="password"
            label="Contraseña"
            placeholder="La Contraseña con la que te registraste"
          />
        </Form>
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
