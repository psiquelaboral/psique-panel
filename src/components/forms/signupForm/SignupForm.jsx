import React from "react";

import { Button, Form, Input } from "antd";

import "./signupform.css";

const SignupForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form
      layout="vertical"
      name="signupForm"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      autoComplete="off"
      style={{ width: "100%" }}
    >
      {/* NAME */}
      <Form.Item
        label="Nombre"
        name="name"
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
        colon={false}
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* EMAIL */}
      <Form.Item
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
        label="Confirma tu ontraseña"
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
  );
};

export default SignupForm;
