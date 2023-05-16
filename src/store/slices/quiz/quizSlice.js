import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quizSlice",
  initialState: {
    currentQuiz: null,
    answers: null,
  },
  reducers: {
    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;
    },
    cleanCurrentQuiz: (state, _action) => {
      state.currentQuiz = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentQuiz, cleanCurrentQuiz, setAnswers } =
  quizSlice.actions;
export default quizSlice.reducer;
