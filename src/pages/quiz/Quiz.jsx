import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import GeneralInformationForm from "./GeneralInformationForm/GeneralInformationForm";
import QuestionsForm from "./QuestionsForm/QuestionsForm";
import "./quiz.css";

const steps = [
  {
    title: "Informacion General",
    content: <GeneralInformationForm />,
  },
  {
    title: "Preguntas",
    content: <QuestionsForm />,
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="quiz-container">
      {/* STEPS */}
      <Steps current={current} items={items} />

      {/* BUTTONS */}
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
      </div>

      {/* CONTENT */}
      <div className="step-container">{steps[current].content}</div>
    </div>
  );
};

export default Quiz;
