//libraries
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    cleanUserData: (state, _action) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, cleanUserData } = userSlice.actions;
export default userSlice.reducer;
