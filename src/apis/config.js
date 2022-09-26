import axios from "axios";

export const getAPIHost = () => {
    return process.env.REACT_APP_API_HOST;
};

export const getLocalAPI = () => {
    return "http://localhost:3001"
}

export const restApi = axios.create({
    baseURL: getAPIHost(),
});
export const authApi = axios.create({
    baseURL: getAPIHost(),
});

export const mockApi = axios.create({
    baseURL: getLocalAPI(),
})

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
                    .post("/api/auth/reissue", {
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
