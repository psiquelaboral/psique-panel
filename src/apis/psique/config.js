import axios from "axios";
import { store } from "@store/store";
import { cleanUserData } from "@store/slices/user/userSlice";

export const psiqueApi = axios.create({
  baseURL: import.meta.env.VITE_PSIQUE_API_HOST,
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
