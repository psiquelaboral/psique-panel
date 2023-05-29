//components
import {
  setCurrentQuiz,
  setAnswers,
  registrySelectedOption,
} from "./quizSlice";
import { getQuizById } from "@apis/psique/quizApi";
import {
  initializeAnswer,
  registryAnswer,
  retriveAnswer,
} from "@apis/psique/answerApi";

export const getAsyncQuizById = (userId) => {
  return async (dispatch, _getState) => {
    try {
      const response = await getQuizById(userId);
      dispatch(setCurrentQuiz(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const asyncInitializeAnswer = ({
  employeeId,
  quizId,
  name,
  description,
  responses = [],
}) => {
  return async (dispatch, _getState) => {
    const answer = { employeeId, quizId, name, description, responses };
    try {
      const response = await initializeAnswer(answer);
      dispatch(setAnswers(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const asyncRegistryAnswer = (
  quizId,
  { questionId, itemId, questionText, answerType, selectedOption = {} }
) => {
  return async (dispatch, _getState) => {
    const body = {
      questionId,
      itemId,
      questionText,
      answerType,
      selectedOption,
    };
    try {
      const response = await registryAnswer(quizId, body);
      dispatch(registrySelectedOption(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getAsyncRetriveAnswer = (quizId, employeeId) => {
  return async (dispatch, _getState) => {
    try {
      const response = await retriveAnswer(quizId, employeeId);
      dispatch(setAnswers(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
