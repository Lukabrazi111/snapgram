import Axios, { type AxiosInstance } from 'axios';

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
        if (error.response?.status === 401) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            
            // Redirect to login page (avoid redirect if already on login/register page)
            const currentPath = window.location.pathname;
            if (currentPath !== '/login' && currentPath !== '/register') {
                window.location.href = '/login';
            }
        }

        return Promise.reject(error.response?.data || error);
    },
);

export default axios;
