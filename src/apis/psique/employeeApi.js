import { psiqueApi } from "./config";

export const getEmplopyeeByCompany = (companyId) => {
  let token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return psiqueApi.get(`/company/employee/${companyId}`, config);
};
