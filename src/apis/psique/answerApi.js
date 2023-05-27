import { psiqueApi } from "./config";

export const initializeAnswer = ({
  employeeId,
  quizId,
  name,
  description,
  responses = [],
}) => {
  let token = localStorage.getItem("accessToken");

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const answer = { employeeId, quizId, name, description, responses };
  return psiqueApi.post(`/answer`, answer, config);
};

export const finalizeAnswer = (answerId) => {
  let token = localStorage.getItem("accessToken");

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return psiqueApi.put(`/answer/finalizer/${answerId}`, {}, config);
};

export const registryAnswer = (
  quizId,
  { questionId, itemId, questionText, answerType, selectedOption = {} }
) => {
  let token = localStorage.getItem("accessToken");

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const response = {
    questionId,
    itemId,
    questionText,
    answerType,
    selectedOption,
  };

  return psiqueApi.put(`/answer/${quizId}`, response, config);
};

export const retriveAnswer = (quizId, employeeId) => {
  let token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return psiqueApi.get(
    `/answer?quizId=${quizId}&employeeId=${employeeId}`,
    config
  );
};
