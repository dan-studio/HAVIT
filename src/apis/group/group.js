import { authApi } from "../config"

export const getAllGroupList = async ()=>{
    return await authApi.get("api/auth/group/");
}

export const createGroup = async (body)=>{
    return await authApi.post("api/auth/group/",body);
}

// 회원의 그룹 리스트를 반환
export const getMyGroupList = async (body) =>{
    return await authApi.get("api/auth/mypage/group");
}

// 그룹 상세 정보
export const getGroupDetail = async (id)=>{
    return await authApi.get(`api/auth/group/${id}`);
}

// 그룹 상세 정보 수정
export const modifyGroupDetail = async (id,body)=>{
    return await authApi.patch(`api/auth/group/${id}`,body);
}

// 그룹 참여하기
export const groupParticipating = async (id)=>{
    return await authApi.post(`api/auth/participate/${id}`);
}

// 그룹 탈퇴하기
export const groupResign= async (id)=>{
    return await authApi.delete(`api/auth/participate/${id}`);
}

