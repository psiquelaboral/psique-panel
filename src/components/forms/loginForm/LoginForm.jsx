import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { login } from "../../../apis/psique/psiqueAuthApi";

// CSS
import "./loginform.css";

const LoginForm = ({ changeView }) => {
  const navigation = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    let { email, password } = values;

    const loginExecutor = async () => {
      try {
        let response = await login({ email, password });
        let { data } = response;
        localStorage.setItem("accessToken", data.accessToken);
        navigation("/");
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };

    loginExecutor();
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      autoComplete="off"
      style={{ width: "100%" }}
    >
      {/* EMAIL */}
      <Form.Item
        label="Email"
        name="email"
        labelCol={{ sm: { pull: 2, offset: 2 } }}
        colon={false}
        rules={[
          {
            required: true,
            message: "Por favor, ingresa tu email",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* PASSWORD */}
      <Form.Item
        label="Contraseña"
        name="password"
        colon={false}
        rules={[
          {
            required: true,
            message: "Necesitamos tu contraseña para saber que eres tú",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* REMEMBERME AND SUBMIT */}
      <Form.Item>
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
            <Form.Item noStyle name="remember" valuePropName="checked">
              <Checkbox>Recuerdame</Checkbox>
            </Form.Item>
          </div>
          <Button type="primary" htmlType="submit">
            Iniciar sesión
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
