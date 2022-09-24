import { authApi, restApi } from './config';
// auth:인증 / rest:그 외!!!

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

  editProfile: async (nickname, password, passwordConfirm) => {
    const response = await authApi.post('/api/auth/mypage', {
      nickname,
      password,
      passwordConfirm,
    });
    return response.data;
  },
};
