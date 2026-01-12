import Axios, { type AxiosInstance } from 'axios';

const axios: AxiosInstance = Axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
    },
});

export default axios;
