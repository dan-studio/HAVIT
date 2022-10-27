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
    const response = await authApi.get('/api/auth/info');
    return response.data;
  },
  //Main
  getMyMembers: async () => {
    const response = await authApi.get('/api/auth/main/')
    return response.data
  },
  getAllGroupList: async () => {
    const response = await authApi.get("api/auth/group/");
    return response.data
},
  //Search
  search: async data => {
    const response = await authApi.get('/api/auth/main/search?search=' + data);
    return response.data;
  },

  //Tag
  getByTag: async tag => {
    const response = await authApi.get('/api/auth/group/tag?tag='+tag);
    return response
  },

  //Group
  getGroupByPage: async page => {
    const response = await authApi.get('/api/auth/group/page?page='+page)
    return response.data
  },
  getGroupByPopularity: async page => {
    const response = await authApi.get('/api/auth/group/popularity?page='+page)
    return response.data
  },
  createGroup:  async body => {
    return await authApi.post("api/auth/group/",body);
  },

  getGroup: async () => {
    const response = await authApi.get('/api/auth/group/');
    return response;
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
  editGroup: async (id,body)=>{
    return await authApi.patch('api/auth/group/$'+id, body);
  },
  deleteGroup: async data => {
    const response = await authApi.delete('/api/auth/group/'+data)
    return response
  },
  //certify
  uploadImage: async data => {
    const response = await authApi.post('/api/auth/certify/', data);
    return response;
  },
  postCertify: async body => {
    const response = await authApi.post("/api/auth/certify/",body);
    return response
  },

  getCertifyDetail: async (certifyId) => {
    const response = await authApi.get('/api/auth/certify/'+certifyId);
    return response.data;
  },
  editCertifyDetail: async (certifyId, data) => {
    const response = await authApi.patch('/api/auth/certify/'+certifyId, data);
    return response
  },
  deleteCertifyDetail: async (certifyId) => {
    const response = await authApi.delete('/api/auth/certify/'+certifyId);
    return response
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
  //subComment
  writeSubComment: async(data)=>{
    const response = await authApi.post('/api/auth/subcomment/', data)
    return response
  },
  deleteSubComment: async(subCommentId)=>{
    const response = await authApi.delete('/api/auth/subcomment/'+subCommentId)
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

  //비밀번호 변경
  modifyPassword: async body => {
    const response =  await authApi.put('/api/auth/mypage/private', body); 
    return response
  },
  
  // 마이페이지 : 내 그룹 가져오기
  getMyGroup: async () => {
    const response = await authApi.get('/api/auth/mypage/group');
    return response.data;
  },

  updateProfile: async data => {
    const response = await authApi.put('/api/auth/mypage/', data);
    return response;
  },
  //MemberPage
  getMemberDetail: async memberId => {
    const response = await authApi.get('/api/auth/info/'+memberId)
    return response
  },
  //Notification
  connectSSE: async (id) => {
    const response = await authApi.get('/subscribe', id)
    return response
  },
  sendNotification: async data => {
    const response = await authApi.post('/api/auth/notification', data)
    return response
  },
  getNotification: async () => {
    const response = await authApi.get('/api/auth/notification')
    return response.data
  },
  readNotification: async (notificationId) => {
    const response = await authApi.patch('/api/auth/notification/'+notificationId)
    return response
  },
  DeleteNotification: async (notificationId) => {
    const response = await authApi.delete('/api/auth/notification/'+notificationId)
    return response
  },
};

