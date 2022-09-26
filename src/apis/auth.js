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

  getgroup: async data => {
    const response = await mockApi.get('/group', data);
    return response;
  },
};
