import React from "react";
import { Button, Form, Input } from "antd";

import "./resetpasswordform.css";

const ResetPasswordForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      autoComplete="off"
      size="large"
      style={{ width: "100%" }}
    >
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

      {/* REMEMBERME AND SUBMIT */}
      <Form.Item>
        <div className="resetpassword-actions-container">
          <Button
            className="resetpassword-buton"
            type="primary"
            htmlType="submit"
          >
            Reiniciar contraseña
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default ResetPasswordForm;
