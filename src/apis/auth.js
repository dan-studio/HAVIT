import { authApi, mockApi, restApi } from "./config";

export const userApis = {
  signup: async (data) => {
    const response = await restApi.post("/api/signup", data);
    return response.data;
  },
  signin: async (email, password) => {
    const response = await authApi.post("/api/login", {
      email,
      password,
    });
    return response;
  },
  logout: async()=>{
    const response = await authApi.post("/api/auth/logout",{

    })
    return response
  }
  ,
  userProfile: async (data) => {
    const reponse = await restApi.get("api/mypage", data);
    return reponse.data;
  },
  getGroup: async () => {
    const response = await mockApi.get("/group");
    return response;
  },
  getGroupDetail: async (id) => {
    const response = await mockApi.get("/group");
   const findDetail = response.data.find(item=>item.groupId===id)
   console.log(findDetail)
    return findDetail
  }
};
