export const persistLoginData = (accessToken, id) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("idUser", id);
};
