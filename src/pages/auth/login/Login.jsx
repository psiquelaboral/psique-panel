import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { notification } from "antd";
import LoginForm from "@components/forms/loginForm/LoginForm";
import "./login.css";

const Login = ({ changeView }) => {
  const [api, contextHolder] = notification.useNotification();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let expiredSession = searchParams.get("expiredSession");
    if (expiredSession === "true") {
      const sessionExpiderMessage = () => {
        api.info({
          key: "sessionExiredNotification",
          message: `Session terminada!!`,
          description: "Tu sesión expiro, inicia sesion de nuevo",
          placement: "topLeft",
        });
      };
      sessionExpiderMessage();
    }
  }, [api, searchParams]);

  return (
    <div className="login-container">
      {contextHolder}
      {/* HEADER */}
      <div className="login-header-container">
        <h1>Iniciar sesión - EDITADO - 2</h1>
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
          ¿Aún no tienes una cuenta?{" "}
          <strong
            onClick={() => {
              changeView("signup");
            }}
          >
            Crear cuenta
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
