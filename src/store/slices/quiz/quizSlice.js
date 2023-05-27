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
    cleanCurrentQuiz: (state, _action) => {
      state.currentQuiz = null;
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;
    },
    registrySelectedOption: (state, action) => {
      const responses = state.answers.responses;
      state.answers.responses = [...responses, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentQuiz,
  cleanCurrentQuiz,
  setAnswers,
  registrySelectedOption,
} = quizSlice.actions;
export default quizSlice.reducer;
