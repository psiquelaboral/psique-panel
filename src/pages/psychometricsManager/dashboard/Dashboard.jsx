//libraries
import React, { useState, useRef, useEffect } from "react";
import { Button, Carousel, Skeleton } from "antd";
import { RightOutlined, CheckCircleFilled } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//components
import Question from "../question/question/Question";
import { initializeAnswer, finalizeAnswer } from "@apis/psique/answerApi";
import { getQuizById } from "@apis/psique/quizApi";
import { asyncRegistryAnswer } from "@store/slices/quiz/thunks";
import { setCurrentQuiz, setAnswers } from "@store/slices/quiz/quizSlice";

//css
import "./dashboard.css";

const Dashboard = () => {
  //component state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [isAnswercompleted, setIsAnswercompleted] = useState(false);

  //hooks invocations
  const dispatch = useDispatch();
  const quizFromRedux = useSelector((state) => state.quiz.currentQuiz);
  const answersFromRedux = useSelector((state) => state.quiz.answers);
  const [isLoading, setIsLoading] = useState(true);
  let { quizId, employeeId, token } = useParams();
  const slider = useRef(null);

  const { questions = [] } = quizFromRedux
    ? quizFromRedux
    : { questions: [], name: "", description: "" };

  const onInit = async () => {
    if (answersFromRedux === null || quizFromRedux === null) {
      try {
        setIsLoading(true);
        const quizFromApi = await getQuizById(quizId, token);
        const quiz = quizFromApi.data;

        const answersFromApi = await initializeAnswer(
          {
            quizId,
            employeeId,
            name: quizFromApi.data.name,
            description: quizFromApi.data.description,
          },
          token
        );
        const answer = answersFromApi.data;

        dispatch(setCurrentQuiz(quiz));
        dispatch(setAnswers(answer, token));

        setCurrentQuestion(answer?.responses?.length);
        // if (answer?.responses?.length > 0) {
        //   slider.current.goTo(answer.responses.length, false);
        // }
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    }

    validateAnswerStatus();
  };

  const validateAnswerStatus = () => {
    if (answersFromRedux?.status === "DONE") {
      setIsAnswercompleted(true);
    }
  };

  const finalizeAnswerExecutor = async () => {
    try {
      const newAnswers = await finalizeAnswer(answersFromRedux.id, token);
      dispatch(setAnswers(newAnswers.data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    onInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizId, employeeId]);

  useEffect(() => {
    validateAnswerStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answersFromRedux]);

  const onSelectedOption = (selectedOption) => {
    setIsNextDisabled(false);
    setSelectedOption(selectedOption);
  };

  const nextQuestionHanlder = () => {
    setIsLoading(true);
    console.log("options saved", selectedOption);

    dispatch(asyncRegistryAnswer(answersFromRedux.id, selectedOption, token));

    setSelectedOption(null);
    slider.current.next();
    setIsNextDisabled(true);
    setIsLoading(false);
  };

  const finalizeQuestionHanlder = () => {
    setIsLoading(true);
    console.log("options saved", selectedOption);
    dispatch(asyncRegistryAnswer(answersFromRedux.id, selectedOption));
    setSelectedOption(null);
    setIsNextDisabled(true);

    //finalize
    finalizeAnswerExecutor();
    setIsLoading(false);
  };

  const afterCaroucelChange = (currentSlide) => {
    setCurrentQuestion(currentSlide);
  };

  return (
    <div className="dashboar-container">
      <Skeleton loading={isLoading}>
        {/* STATIC CONTENT */}
        <div className="static-container">
          {!isAnswercompleted ? (
            <div className="static-content">
              {`${currentQuestion + 1} / ${questions.length}    preguntas`}
            </div>
          ) : null}
        </div>

        {/* QUESTIONS CONTAINER */}
        <div className="dashboard-questions-container">
          {isAnswercompleted ? (
            // COMPLETE QUIZ STATUS
            <div className="success-container">
              <CheckCircleFilled className="success-icon" />
              <div className="success-text-container">
                <p className="success-main-text">
                  <strong>El formulario ha sido completado</strong>
                </p>
                <p className="success-secondary-text">
                  Ahora sera posible que en tu empresa se den cuenta de la
                  reaildad en la que se desempeñan tu y tus compañeros.
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* QUESTION */}
              <Carousel
                ref={slider}
                afterChange={afterCaroucelChange}
                dots={false}
                lazyLoad={true}
                swipe={false}
                waitForAnimate={true}
                speed={1000}
                initialSlide={currentQuestion}
              >
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
                {currentQuestion === questions.length - 1 ? (
                  <div className="next-quiz-button">
                    <Button
                      className="next-quiz-button"
                      disabled={isNextDisabled}
                      size="large"
                      block={true}
                      loading={isLoading}
                      onClick={finalizeQuestionHanlder}
                    >
                      Terminar formulario
                    </Button>
                  </div>
                ) : (
                  <div className="next-quiz-button">
                    <Button
                      disabled={isNextDisabled}
                      block={true}
                      loading={isLoading}
                      onClick={nextQuestionHanlder}
                    >
                      Siquiente pregunta
                      <RightOutlined />
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </Skeleton>
    </div>
  );
};

export default Dashboard;
