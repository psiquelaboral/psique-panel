import React from "react";
import Button from "../../components/button/Button";
import "./css/resetpassword.css";
import Form from "../../components/form/form/Form";
import TextInput from "../../components/form/input/textinput/TextInput";

const ResetPassword = ({ changeView }) => {
  const FormFooter = () => (
    <div className="resetpassword-actions-container">
      <Button text="Reiniciar contraseña" />
    </div>
  );
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
        <Form disableSubmit FooterComponent={<FormFooter />}>
          <TextInput
            oneline
            type="email"
            label="Email"
            placeholder="Ingresa tu correo electronico"
          />
        </Form>
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
