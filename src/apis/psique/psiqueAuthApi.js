import { psiqueApi } from "./config";

export const login = ({ email, password }) => {
  return psiqueApi.post(`/auth/login`, { email, password });
};
