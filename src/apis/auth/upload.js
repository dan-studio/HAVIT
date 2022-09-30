import { authApi } from "../config"

export const uploadImage = async (file)=>{
    const formData = new FormData();
    formData.append("image", file);
    const headers = {
        "content-type": "multipart/form-data"
    }
    return await authApi.post("api/auth/image",file,{headers});
}