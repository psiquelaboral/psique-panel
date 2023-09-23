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

export const getAsyncQuizById = (userId, employeeToken) => {
  return async (dispatch, _getState) => {
    try {
      const response = await getQuizById(userId, employeeToken);
      dispatch(setCurrentQuiz(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const asyncInitializeAnswer = (
  { employeeId, quizId, name, description, responses = [] },
  employeeToken
) => {
  return async (dispatch, _getState) => {
    const answer = { employeeId, quizId, name, description, responses };
    try {
      const response = await initializeAnswer(answer, employeeToken);
      dispatch(setAnswers(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const asyncRegistryAnswer = (
  quizId,
  { questionId, itemId, questionText, answerType, selectedOption = {} },
  employeeToken
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
      const response = await registryAnswer(quizId, body, employeeToken);
      dispatch(registrySelectedOption(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getAsyncRetriveAnswer = (quizId, employeeId, employeeToken) => {
  return async (dispatch, _getState) => {
    try {
      const response = await retriveAnswer(quizId, employeeId, employeeToken);
      dispatch(setAnswers(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
