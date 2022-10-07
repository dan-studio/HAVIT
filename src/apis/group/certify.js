import { authApi } from "../config"

export const createCertify = async (body)=>{
    return await authApi.post("/api/auth/certify/",body);
}