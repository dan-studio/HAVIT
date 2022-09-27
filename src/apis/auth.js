import { authApi, mockApi, restApi } from './config';

export const userApis = {
  signup: async data => {
    const response = await restApi.post('/api/signup', data);
    return response.data;
  },
  signin: async (email, password) => {
    const response = await authApi.post('/api/login', {
      email,
      password,
    });
    return response;
  },
  logout: async () => {
    const response = await authApi.post("/api/auth/logout", {});
    return response;
  },
  userProfile: async (data) => {
    const reponse = await restApi.get("api/mypage", data);
    return reponse.data;
  },
  getGroup: async () => {
    const response = await mockApi.get("/group");
    return response;
  },
  getGroupDetail: async (id) => {
    const response = await mockApi.get("/group");
    const findDetail = response.data.find((item) => item.groupId === id);
    console.log(findDetail);
    return findDetail;
  },
   // 마이페이지내에서의 유저정보
  usersInfo: async (nickname, profileUrl, crew) => {
    const response = await mockApi.get('/users', { nickname, profileUrl, crew });
    return response;
  },
  editProfile: async (nickname, password, passwordConfirm) => {
    const response = await mockApi.post('/users', {
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
    // const response = await authApi.post(`/api/auth/certify/`, data);
    const response = await mockApi.post(`/certify`, data);
    console.log("response",response)
    return response;
  },
};
