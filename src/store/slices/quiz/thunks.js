import { setCurrentQuiz } from "./quizSlice";
import { getQuizById } from "../../../apis/psique/quizApi";

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
