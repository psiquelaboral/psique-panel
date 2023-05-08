import React, { useState } from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { login } from "../../../apis/psique/psiqueAuthApi";
import { useDispatch } from "react-redux";
import { getAsyncUser } from "../../../store/slices/user/thunks";

// CSS
import "./loginform.css";

const LoginForm = ({ changeView }) => {
  let [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();

  const error = () => {
    api.error({
      message: `Error al iniciar sesion`,
      description: "Las credenciales no son correctas",
      placement: "topLeft",
    });
  };

  const onFinish = (values) => {
    let { email, password } = values;

    const loginExecutor = async () => {
      try {
        setIsLoading(true);
        let response = await login({ email, password });
        let { data } = response;
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("idUser", data.id);
        dispatch(getAsyncUser(data.id));
        navigation("/");
      } catch (e) {
        setIsLoading(false);
        error();
      }
    };

    loginExecutor();
  };

  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        autoComplete="off"
        style={{ width: "100%" }}
        disabled={isLoading}
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
    </>
  );
};

export default LoginForm;
