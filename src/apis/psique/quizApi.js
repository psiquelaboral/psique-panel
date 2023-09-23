import { psiqueApi } from "./config";

export const getQuizById = (id, employeeToken) => {
  let token = employeeToken
    ? employeeToken
    : localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return psiqueApi.get(`/quiz/employee/${id}`, config);
};

export const listQuiz = () => {
  let token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return psiqueApi.get(`/quiz/all/resume`, config);
};
