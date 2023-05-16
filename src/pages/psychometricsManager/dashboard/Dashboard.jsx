import React, { useState, useRef, useEffect } from "react";

import { Button, Statistic, Carousel } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAsyncQuizById } from "../../../store/slices/quiz/thunks";
import { setAnswers } from "../../../store/slices/quiz/quizSlice";
import Question from "../question/question/Question";
import "./dashboard.css";

const Dashboard = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const dispatch = useDispatch();
  const quizFromRedux = useSelector((state) => state.quiz.currentQuiz);
  const answersFromRedux = useSelector((state) => state.quiz.answers);

  let { quizId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const slider = useRef(null);

  const {
    name,
    id,
    description,
    questions = [],
  } = quizFromRedux ? quizFromRedux : {};

  useEffect(() => {
    if (quizFromRedux === null) {
      dispatch(getAsyncQuizById(quizId));
    }
    dispatch(
      setAnswers({
        quizId: id,
        name,
        description,
        responses: quizFromRedux?.responses
          ? [...answersFromRedux.responses]
          : [],
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizFromRedux]);

  const onSelectedOption = (selectedOption) => {
    setIsNextDisabled(false);
    setSelectedOption(selectedOption);
  };

  const nextQuestionHanlder = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("options saved", selectedOption);
      dispatch(
        setAnswers({
          ...answersFromRedux,
          responses: [...answersFromRedux.responses, selectedOption],
        })
      );
      setSelectedOption(null);
      slider.current.next();
      setIsNextDisabled(true);
      setIsLoading(false);
    }, 1);
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
          {questions.map((question) => {
            return (
              <Question
                loading={isLoading}
                key={question.itemId}
                question={question}
                onSelect={onSelectedOption}
              />
            );
          })}
        </Carousel>

        {/* CONTROLS */}
        <div className="dashboard-controls-container">
          {selectedQuestion === questions.length - 1 ? (
            <div className="next-quiz-button">
              <Button
                className="next-quiz-button"
                disabled={isNextDisabled}
                size="large"
                block={true}
                loading={isLoading}
                onClick={() => {
                  console.log("Quiz completed");
                }}
              >
                Terminar formulario
              </Button>
            </div>
          ) : (
            <div className="next-quiz-button">
              <Button
                disabled={isNextDisabled}
                size="large"
                block={true}
                loading={isLoading}
                onClick={nextQuestionHanlder}
              >
                Siguiente Pregunta
                <RightOutlined />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
