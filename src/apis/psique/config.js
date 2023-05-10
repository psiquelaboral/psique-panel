import axios from "axios";
import { store } from "../../store/store";
import { cleanUserData } from "../../store/slices/user/userSlice";

export const psiqueApi = axios.create({
  baseURL: "http://localhost:8080/",
});

psiqueApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      !error.request.responseURL.includes("/auth/login") &&
      error.response.status === 401
    ) {
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
      store.dispatch(cleanUserData());
      window.location.replace("/#/login?expiredSession=true");
    }
  }
);
