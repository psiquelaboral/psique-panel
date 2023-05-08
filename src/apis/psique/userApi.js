import { psiqueApi } from "./config";

export const getUserById = (id) => {
  let token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return psiqueApi.get(`/user/${id}`, config);
};
