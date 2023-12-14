import React from "react";
import { Button, Form, Input } from "antd";
import "./generalinformation.css";

const GeneralInformationForm = () => {
  const [form] = Form.useForm();

  return (
    <div className="general-information-container">
      <Form layout="vertical" form={form} className="form-container">
        <Form.Item label="Nombre del psicométrico">
          <Input placeholder="Nombre del psicométrico" />
        </Form.Item>
        <Form.Item label="Descripción">
          <Input placeholder="Descripción" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Siguiente</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GeneralInformationForm;
