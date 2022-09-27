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
    const response = await authApi.post('/api/auth/logout', {});
    return response;
  },
  
  userProfile: async (data) => {
    const reponse = await restApi.get("api/mypage", data);
    return reponse.data;
  },
  
  getGroup: async () => {
    const response = await authApi.get("/api/auth/group/");
    // const response = await mockApi.get("/group");
    return response;
  },

  getGroupDetail: async (id) => {
    // const response = await mockApi.get("/api/auth/group/"+id);
    const response = await mockApi.get("/group");
    console.log(response)
    const detail = response.data.find(item=>item.groupId===id)
    return detail;
  },

  uploadImage: async data => {
    const response = await authApi.post('/api/auth/certify/', data);
    return response;
  },

  // 마이페이지 내에서의 내 정보
  userProfile: async () => {
    const reponse = await mockApi.get('/users');
    console.log('🚀 ⁝ userProfile: ⁝ reponse', reponse.data);
    console.log('🚀 ⁝ userProfile: ⁝ type', typeof reponse);
    return reponse;
  },

  // 마이페이지 내에서의 유저 정보
  usersInfo: async (nickname, profileUrl, crew, email) => {
    const response = await mockApi.get('/users', { nickname, profileUrl, crew, email });
    return response;
  },
};
