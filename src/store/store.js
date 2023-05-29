//libraries
import { configureStore } from "@reduxjs/toolkit";

//components
import userReducer from "./slices/user/userSlice";
import quizSlice from "./slices/quiz/quizSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizSlice,
  },
});
