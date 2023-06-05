import React, { useState } from "react";

import { Button, Form, Input } from "antd";

import { signup } from "@apis/psique/userApi";
import useLogin from "@hooks/login";

// CSS
import "./signupform.css";

const SignupForm = () => {
  const [loginData, setLoginData] = useState({ flag: true });
  const { email, password, flag } = loginData;

  const [isLoading, contextHolder] = useLogin(email, password, flag);

  const signupExecutor = async ({ name, email, password }) => {
    const newUser = { name, email, password };
    try {
      const response = await signup(newUser);
      if (response.status === 200) {
        setLoginData({ email, password, flag: !flag });
      }
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const onFinish = (values) => {
    const { confirmPassword, password, email, name } = values;
    if (confirmPassword === password) {
      signupExecutor({ name, email, password });
    } else {
      console.log("error password");
    }
    console.log("Success:", values);
  };

  return (
    <>
      {contextHolder}
      <Form
        name="signupForm"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        autoComplete="off"
        style={{ width: "100%" }}
        disabled={isLoading}
        size="large"
      >
        {/* NAME */}
        <Form.Item
          label="Nombre"
          name="name"
          labelCol={{ sm: { pull: 5, offset: 5 } }}
          colon={false}
          rules={[
            {
              required: true,
              message: "El nombre es necesario",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* COMPANY */}
        <Form.Item
          label="Empresa"
          name="company"
          labelCol={{ sm: { pull: 5, offset: 5 } }}
          colon={false}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* EMAIL */}
        <Form.Item
          labelCol={{ sm: { pull: 6, offset: 6 } }}
          label="Email"
          name="email"
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
          labelCol={{ sm: { pull: 4, offset: 4 } }}
          label="Contraseña"
          name="password"
          colon={false}
          rules={[
            {
              required: true,
              message: "La contraseña es requerida",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* CONFIRM PASSWORD */}
        <Form.Item
          label="Confirma tu contraseña"
          name="confirmPassword"
          colon={false}
          rules={[
            {
              required: true,
              message: "La contraseña es requerida",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* REMEMBERME AND SUBMIT */}
        <Form.Item>
          <div className="signup-actions-container">
            <Button type="primary" htmlType="submit">
              Crear cuenta
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignupForm;
