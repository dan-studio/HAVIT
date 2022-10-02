import { authApi, formApi, mockApi, restApi, setToken } from './config';

export const userApis = {
  //Auth
  signup: async data => {
    const response = await restApi.post('/api/signup', data);
    return response.data;
  },
  // 
  signin: async (data) => {
    const response = await authApi.post('/api/login', data);
    if(response.status === 200){
      const token = { access_token: response.headers.authorization, refresh_token:response.headers["refresh-token"]}
      setToken(token);
    }
    return response;
  },
  logout: async () => {
    const response = await authApi.post('/api/auth/logout', {});
    return response;
  },
  myProfile: async () => {
    const reponse = await authApi.get('api/auth/info');
    return reponse.data.data;
  },

  //Group
  getGroup: async () => {
    const response = await authApi.get("/api/auth/group/");
    return response.data.data;
  },
  getGroupDetail: async id => {
    const response = await authApi.get('/api/auth/group/' + id);
    return response;
  },
  joinGroup: async data => {
    const response = await authApi.post('api/auth/participate/' + data);
    return response;
  },
  leaveGroup: async data => {
    const response = await authApi.delete('api/auth/participate/' + data);
    return response;
  },
  //certify
  uploadImage: async (data) => {
    const response = await authApi.post('/api/auth/certify/', data);
    return response;
  },
  // 마이페이지 내에서의 내 정보
  userProfile: async () => {
    const reponse = await authApi.get('/users');
    // console.log('🚀 ⁝ userProfile: ⁝ reponse', reponse.data);
    // console.log('🚀 ⁝ userProfile: ⁝ type', typeof reponse);
    return reponse;
  },

  // 마이페이지 내에서의 유저 정보
  usersInfo: async (nickname, profileUrl, crew, email) => {
    const response = await authApi.get('/users', { nickname, profileUrl, crew, email });
    return response;
  },

  // 마이페이지에서 비밀번호 확인하기
  userPwCheck: async password => {
    const response = await authApi.post('/api/auth/mypage/check', { password });

    return response;
  },
  getgroup: async () => {
    const response = await authApi.get('/api/group');
    return response;
  },
  updateProfile: async data => {
    const response = await authApi.put('/api/auth/mypage/', data);
    console.log('🚀 ⁝ response', response);
    return response;
  },
};
