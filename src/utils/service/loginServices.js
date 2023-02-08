import apiClient from "./api/apiClient";

export const login = (mail, pass) => {
  const param = {
    email: mail,
    password: pass,
  };

  return apiClient.post("users/login", param);
};

export const deneme = () => {
  return apiClient.get("");
};
