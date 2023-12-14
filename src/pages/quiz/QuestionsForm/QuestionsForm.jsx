import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Typography,
  Select,
  Space,
} from "antd";

import "./questionform.css";

const QuestionsForm = () => {
  const [form] = Form.useForm();

  return (
    <div className="question-form-container">
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        form={form}
        name="dynamic_form_complex"
        style={{
          width: 600,
          minWidth: 400,
        }}
        autoComplete="off"
        initialValues={{
          items: [{}],
        }}
      >
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <div
              style={{
                display: "flex",
                rowGap: 16,
                flexDirection: "column",
              }}
            >
              {fields.map((field) => (
                <Card
                  size="small"
                  title={`Pregunta ${field.name + 1}`}
                  key={field.key}
                  extra={
                    <CloseOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  }
                >
                  <Form.Item label="Item Id" name={[field.name, "itemId"]}>
                    <InputNumber min={1} style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item label="Pregunta" name={[field.name, "pregunta"]}>
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Instrucciones"
                    name={[field.name, "instructions"]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Tipo de respuesta"
                    name={[field.name, "answerType"]}
                  >
                    <Select>
                      <Select.Option value="LIKERT">LIKERT</Select.Option>
                      <Select.Option value="YES_NO">Sí/No</Select.Option>
                    </Select>
                  </Form.Item>

                  {/* Nest Form.List */}
                  <Form.Item label="Opciones">
                    <Form.List name={[field.name, "options"]}>
                      {(subFields, subOpt) => (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: 16,
                          }}
                        >
                          {subFields.map((subField) => (
                            <Space key={subField.key}>
                              <Card
                                size="small"
                                title={`Pregunta ${field.name + 1}`}
                                key={field.key}
                                extra={
                                  <CloseOutlined
                                    onClick={() => {
                                      remove(field.name);
                                    }}
                                  />
                                }
                              >
                                <Form.Item
                                  noStyle
                                  name={[subField.name, "first"]}
                                >
                                  <Input placeholder="first" />
                                </Form.Item>
                                <Form.Item
                                  noStyle
                                  name={[subField.name, "second"]}
                                >
                                  <Input placeholder="second" />
                                </Form.Item>
                                <CloseOutlined
                                  onClick={() => {
                                    subOpt.remove(subField.name);
                                  }}
                                />
                              </Card>
                            </Space>
                          ))}
                          <Button
                            type="dashed"
                            onClick={() => subOpt.add()}
                            block
                          >
                            + Add Sub Item
                          </Button>
                        </div>
                      )}
                    </Form.List>
                  </Form.Item>
                </Card>
              ))}

              <Button type="dashed" onClick={() => add()} block>
                + Add Item
              </Button>
            </div>
          )}
        </Form.List>

        <Form.Item noStyle shouldUpdate>
          {() => (
            <Typography>
              <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
            </Typography>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default QuestionsForm;
