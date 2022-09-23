import axios from "axios";

export const getAPIHost = () => {
    return process.env.REACT_APP_API_HOST;
};
export const restApi = axios.create({
    baseURL: getAPIHost(),
});
export const authApi = axios.create({
    baseURL: getAPIHost(),
});

authApi.interceptors.request.use(async (req) => {
    const token = getToken();
    if (token) {
        req.headers.common.authorization = `Bearer ${token.access_token}`;
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
                    .get("리플래시토큰으로 엑세스토큰 재발급해주는 url", {
                        headers: {
                            common: {
                                refresh_token: `Bearer ${refresh_token}`,
                            },
                        },
                    })
                    .then((req) => {
                        setToken(req.data);
                    })
                    .catch(() => {
                        window.location.reload();
                    });
            } else window.location.reload();
        }
        return Promise.reject(err);
    }
);

export const getToken = () => {
    const item = localStorage.getItem(process.env.REACT_TOKEN_SAVE_KEY);
    if (item) {
        const token = JSON.parse(item);
        return token;
    }
    return false;
};

export const setToken = (token) => {
    if (!token?.access_token) {
        localStorage.setItem(process.env.REACT_TOKEN_SAVE_KEY, "");
        return false;
    }
    const { access_token, refresh_token } = token;
    console.log(token)
    const auth_data = {
        access_token,
        refresh_token,
    };
    localStorage.setItem(
        process.env.REACT_TOKEN_SAVE_KEY,
        JSON.stringify(auth_data)
    );
    
    return auth_data;
};
