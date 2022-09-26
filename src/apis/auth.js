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

  getGroup: async () => {
    const response = await mockApi.get('/group');
    return response;
  },

  getGroupDetail: async id => {
    const response = await mockApi.get('/group');
    const findDetail = response.data.find(item => item.groupId === id);
    console.log(findDetail);
    return findDetail;
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
