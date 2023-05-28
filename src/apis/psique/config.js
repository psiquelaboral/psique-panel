import axios from "axios";
import { store } from "../../store/store";
import { cleanUserData } from "../../store/slices/user/userSlice";

//const URL_BASE_PROD = "https://p01--psique-api--qpfx26t9ms8m.code.run";
const URL_BASE_LOCAL = "http://localhost:8080/";

export const psiqueApi = axios.create({
  baseURL: URL_BASE_LOCAL,
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
