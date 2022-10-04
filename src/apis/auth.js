import { authApi, restApi, setToken } from './config';

export const userApis = {
  //Auth
  signup: async data => {
    const response = await restApi.post('/api/signup', data);
    return response.data;
  },
  //
  signin: async data => {
    const response = await authApi.post('/api/login', data);
    if (response.status === 200) {
      const token = { access_token: response.headers.authorization, refresh_token: response.headers['refresh-token'] };
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
    return reponse.data;
  },

  //Search
  search: async data => {
    const response = await authApi.get('/api/auth/main/search?search=' + data);
    return response.data;
  },

  //Group
  getGroup: async () => {
    const response = await authApi.get('/api/auth/group/');
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
  uploadImage: async data => {
    const response = await authApi.post('/api/auth/certify/', data);
    return response;
  },

  getCertify: async (groupId) => {
    const response = await authApi.get('/api/auth/certify/'+groupId);
    console.log(response)
    return response.data.certifyImgUrlList;
  },
  getCertifyDetail: async (groupId) => {
    const response = await authApi.get('/api/auth/certify/'+groupId);
    console.log(response)
    return response.data;
  },


  // 마이페이지 : 내 정보
  userProfile: async () => {
    const reponse = await authApi.get('/users');
    return reponse;
  },

   //comment
  writeComment: async (data) => {
    const response = await authApi.post('/api/auth/comment/', data)
    return response
  },
  editComment: async (commentId) => {
    const response = await authApi.put('/api/auth/comment/'+commentId)
    return response
  },
  deleteComment: async (commentId) => {
    const response = await authApi.delete('/api/auth/comment/'+commentId)
    return response
  },
  getComment: async (certifyId) => {
    const response = await authApi.get('/api/auth/comment/',certifyId)
    return response
  },
  // 마이페이지 내에서의 유저 정보

  usersInfo: async (nickname, profileUrl, crew, email) => {
    const response = await authApi.get('/users', { nickname, profileUrl, crew, email });
    return response;
  },

  // 마이페이지 : 비밀번호 확인하기
  userPwCheck: async password => {
    const response = await authApi.post('/api/auth/mypage/check', { password });

    return response;
  },

  // 마이페이지 : 내 그룹 가져오기
  getmyGroup: async () => {
    const response = await authApi.get('/api/auth/mypage/group');
    console.log('🚀 ⁝ getmyGroup: ⁝ response', response);

    return response;
  },

  updateProfile: async data => {
    const response = await authApi.put('/api/auth/mypage/', data);
    return response;
  },
};
