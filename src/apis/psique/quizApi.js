import { psiqueApi } from "./config";

export const getQuizById = (id) => {
  let token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return psiqueApi.get(`/quiz/employee/${id}`, config);
};
