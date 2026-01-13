import Axios, { type AxiosInstance, type AxiosError } from 'axios';
import { type NavigateFunction, useNavigate } from 'react-router-dom';

const axios: AxiosInstance = Axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

axios.interceptors.request.use((config) => {
    const token: string | null = localStorage.getItem('auth_token') ?? null;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const navigate: NavigateFunction = useNavigate();
        const err = error as AxiosError;

        if (err.response?.status === 401) {
            localStorage.removeItem('auth_token');
            // TODO: maybe in the future we can add a message for the user.
            navigate('/login');
        }

        return Promise.reject(err);
    },
);

export default axios;
