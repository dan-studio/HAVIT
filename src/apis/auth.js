import { authApi, mockApi, restApi } from "./config";

export const userApis = {
  signup: async (data) => {
    const response = await restApi.post("/api/signup", data);
    return response.data;
  },

  signin: async (email, password) => {
    const response = await authApi.post("/api/login", {
      email,
      password,
    });
    return response;
  },

  editProfile: async (nickname, password, passwordConfirm) => {
    const response = await authApi.post("/api/auth/mypage", {
      nickname,
      password,
      passwordConfirm,
    });
    return response.data;
  },

  getgroup: async () => {
    const response = await authApi.get("/api/group");
    return response;
  },
  uploadImage: async (data) => {
    const response = await authApi.post(`/api/auth/certify/`, data);
    console.log("response",response)
    return response;
  },
};
