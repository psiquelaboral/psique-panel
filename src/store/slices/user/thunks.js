import { setUser } from "./userSlice";
import { getUserById } from "../../../apis/psique/userApi";

export const getAsyncUser = (userId) => {
  return async (dispatch, _getState) => {
    try {
      const response = await getUserById(userId);
      dispatch(setUser(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
