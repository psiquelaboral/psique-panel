import React, { useState, useRef, useEffect } from "react";

import { Button, Statistic, Carousel } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Question from "../question/question/Question";
import { GUIA_3 } from "../../../apis/dommy/nom35/nom35-quiz";
import "./dashboard.css";

const Dashboard = () => {
  const [userResponses, setUserResponses] = useState({ responses: [] });
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const slider = useRef(null);

  const { name, id, description, questions } = GUIA_3;

  useEffect(() => {
    setUserResponses({
      ...userResponses,
      quizId: id,
      name,
      description,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectedOption = (selectedOption) => {
    setIsNextDisabled(false);
    setSelectedOption(selectedOption);
  };

  const nextQuestionHanlder = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("options saved", selectedOption);
      setUserResponses({
        ...userResponses,
        responses: [...userResponses.responses, selectedOption],
      });
      setSelectedOption(null);
      slider.current.next();
      setIsNextDisabled(true);
      setIsLoading(false);
    }, 1000);
  };

  const afterCaroucelChange = (currentSlide) => {
    setSelectedQuestion(currentSlide);
    console.log(questions[currentSlide]);
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
        <Carousel ref={slider} afterChange={afterCaroucelChange} dots={false}>
          {questions.map((question) => (
            <Question
              loading={isLoading}
              key={question.id}
              question={question}
              onSelect={onSelectedOption}
            />
          ))}
        </Carousel>

        {/* CONTROLS */}
        <div className="dashboard-controls-container">
          <p>Siguiente</p>

          {selectedQuestion === questions.length - 1 ? null : (
            <Button
              disabled={isNextDisabled}
              shape="circle"
              size="large"
              block={true}
              loading={isLoading}
              icon={<RightOutlined />}
              onClick={nextQuestionHanlder}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
