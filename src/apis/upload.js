import { authApi } from "./config"

export const uploadImage = async (file)=>{
    const formData = new FormData();
    formData.append("image", file);
    return await authApi.post("api/auth/image/",formData,{
        headers: {
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryJ7wzutFgdabU1MtA'
          ,'accept': '*/*'
        }}
    );
}