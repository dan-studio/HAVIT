import { authApi, mockApi, restApi } from "./config"

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
  userProfile: async data => {
    const reponse = await restApi.get('api/mypage', data);
    return reponse.data;
  },
  getgroup: async () => {
    const response = await mockApi.get('/group')
    return response
  }
}

