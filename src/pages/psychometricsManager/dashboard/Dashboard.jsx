import React, { useState, useRef } from "react";

import { Button, Statistic, Carousel } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Question from "../question/question/Question";
import "./dashboard.css";

const options = [
  {
    id: 1,
    text: "😁 Siempre",
  },
  {
    id: 2,
    text: "😊 Casi siempre",
  },
  {
    id: 3,
    text: "🤔 Algunas veces",
  },
  {
    id: 4,
    text: "😒 Casi nunca",
  },
  {
    id: 5,
    text: "😡 Nunca",
  },
];

const questions = [
  {
    id: 1,
    text: "El espacio donde trabajo me permite realizar mis actividades de manera segura e higiénica",
    options: options,
  },
  {
    id: 2,
    text: "Mi trabajo me exige hacer mucho esfuerzo físico",
    options: options,
  },
  {
    id: 3,
    text: "Me preocupa sufrir un accidente en mi trabajo",
    options: options,
  },
  {
    id: 4,
    text: "Considero que en mi trabajo se aplican las normas de seguridad y salud en el trabajo",
    options: options,
  },
  {
    id: 5,
    text: "Considero que las actividades que realizo son peligrosas",
    options: options,
  },
];

const Dashboard = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const slider = useRef(null);

  const onChange = (currentSlide) => {
    setSelectedQuestion(currentSlide);
  };

  return (
    <div className="dashboar-container">
      <div className="dashboard-questions-container">
        {/* STATIC CONTENT */}
        <div className="static-container">
          <div className="static-content">
            <Statistic
              title="Preguntas"
              value={selectedQuestion + 1}
              suffix={"/ " + questions.length}
              style={{ color: "#fff" }}
            />
          </div>
        </div>

        {/* QUESTION */}
        <Carousel ref={slider} afterChange={onChange} dots={false}>
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </Carousel>

        {/* CONTROLS */}
        <div className="dashboard-controls-container">
          <p>Siguiente</p>

          <Button
            disabled={selectedQuestion === questions.length - 1}
            shape="circle"
            size="large"
            block={true}
            icon={<RightOutlined />}
            onClick={() => {
              slider.current.next();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
