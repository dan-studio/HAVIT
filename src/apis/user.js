import { restApi } from "./config";

export const userDataField = {
    name: String,
    password: String,
    nickName: String,
    phone: String,
    gender: Number,
};

// 모든 유저 받아오기
export const getUsers = async ({ pagenation }) => {
    const res = await restApi.get("user/list", { params: pagenation });
    return res;
};

// 유저 생성
export const createUsers = async ({ postData }) => {
    const res = await restApi.post("user/list", { postData });
    return res;
};
