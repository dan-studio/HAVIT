import { authApi, mockApi, restApi } from './config';

export const userApis = {
  //Auth
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
    const response = await authApi.post('/api/auth/logout', {});
    return response;
  },
  myProfile: async () => {
    const reponse = await authApi.get("api/auth/info");
    return reponse.data.data;
  },
  //Group
  getGroup: async () => {
    const response = await authApi.get('/api/auth/group/');
    return response;
  },
  getGroupDetail: async (id) => {
    const response = await authApi.get("/api/auth/group/"+id);
    return response;
  },
  joinGroup: async (data) => {
    const response = await authApi.post("api/auth/participate/"+data)
    return response
  },
  leaveGroup: async (data) => {
    const response = await authApi.delete("api/auth/participate/"+data)
    return response
  },
  //certify
  uploadImage: async data => {
    const response = await authApi.post('/api/auth/certify/', data);
    console.log(data)
    return response;
  },
  // 마이페이지 내에서의 내 정보
  // userProfile: async data => {
  //   const reponse = await authApi.get('/users');
  //   console.log('🚀 ⁝ userProfile: ⁝ reponse', reponse);
  //   return reponse;
  // },

  // 마이페이지 내에서의 유저 정보
  // usersInfo: async (nickname, profileUrl, crew, email) => {
  //   const response = await authApi.get('/api/auth/main', { nickname, profileUrl, crew, email });
  //   return response;
  // },

  // 마이페이지에서 비밀번호 확인하기
  userPwCheck: async password => {
    const response = await authApi.post('/api/auth/mypage/check', { password });
    console.log('🚀 ⁝ password', typeof password);

    return response;
  },
  getgroup: async () => {
    const response = await authApi.get("/api/group");
    return response;
  },
  uploadImage: async (data) => {
    // const response = await authApi.post(`/api/auth/certify/`, data);
    const response = await authApi.post(`/api/auth/certify/`, data);
    console.log("response",response)
    return response;
  },
};
