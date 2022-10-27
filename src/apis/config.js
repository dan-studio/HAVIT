import axios from "axios";

export const getAPIHost = () => {
  return process.env.REACT_APP_API_HOST;
};

export const getKakaoAPIHost = () => {
  return "dapi.kakao.com";
};

export const restApi = axios.create({
  baseURL: getAPIHost(),
});

export const authApi = axios.create({
  baseURL: getAPIHost(),
  withCredentials: true,
});

export const kakaoApi = axios.create({});

export const fileUrlHost = (number) => {
  return process.env.REACT_APP_FILE_HOST + number;
};

authApi.interceptors.request.use((req) => {
  const token = getToken();
  if (token) {
    req.headers.authorization = token.access_token;
  }
  return req;
});

authApi.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.response?.status;
    if (status === 403 || status === 401) {
      const refresh_token = getToken();
      if (refresh_token) {
        axios
          .post(getAPIHost() + "/api/auth/reissue", {
            headers: {
              refresh_token: `${refresh_token}`,
            },
          })
          .then((req) => {
            setToken(req.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    return Promise.reject(err);
  }
);

kakaoApi.interceptors.request.use((req) => {
  req.headers.Authorization = `KakaoAK ${process.env.REACT_APP_KAKAO_RESTAPI_KEY}`;
  return req;
});

export const getToken = () => {
  const item = localStorage.getItem(process.env.REACT_APP_TOKEN_SAVE_KEY);
  if (item) {
    const token = JSON.parse(item);
    return token;
  }
  return false;
};

export const setToken = (token) => {
  if (!token?.access_token) {
    localStorage.setItem(process.env.REACT_APP_TOKEN_SAVE_KEY, "");
    return false;
  }
  const { access_token, refresh_token } = token;
  const auth_data = {
    access_token,
    refresh_token,
  };
  localStorage.setItem(
    process.env.REACT_APP_TOKEN_SAVE_KEY,
    JSON.stringify(auth_data)
  );
  return auth_data;
};

export const removeToken = () => {
  const keyName = process.env.REACT_APP_TOKEN_SAVE_KEY;
  localStorage.removeItem(keyName);
};
