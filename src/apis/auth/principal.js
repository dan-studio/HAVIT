import { authApi, getAPIHost, restApi, setToken } from "../config";

export const getMe = async ()=>{
    const response = await authApi.get('/api/auth/info');
    return response.data;
}

export const signup = async data => {
    const response = await restApi.post('/api/signup', data);
    return response;
}
export const signin = async (data) => {
  console.log(getAPIHost());
  const response = await restApi.post('/api/login', data);
  if(response.status === 200){
    const token = { access_token: response.headers.authorization, refresh_token:response.headers["refresh-token"]}
    setToken(token);
  }
  return response;
}
export const logout= async () => {
  const response = await authApi.post('/api/auth/logout', {});
  return response;
}

export const modifyMyInfo = async (body)=>{
  return await authApi.put('/api/auth/mypage/', body); 
}

export const modifyPassword = async (body)=>{
  return await authApi.put('/api/auth/mypage/private', body); 
}
