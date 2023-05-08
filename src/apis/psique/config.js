import axios from "axios";

export const psiqueApi = axios.create({
  baseURL: "http://localhost:8080/",
});
