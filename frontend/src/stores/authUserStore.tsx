import { create } from 'zustand';
import axios from '@/configs/axios.tsx';

type userState = {
    user: object;
    authToken: string;
    isAuthenticated: boolean;
};

type userActions = {
    getUser: () => Promise<userState['user'] | null>;
    setUser: (user: userState['user']) => void;
    setAuthToken: (token: userState['authToken']) => void;
    setIsAuthenticated: (isAuthenticated: userState['isAuthenticated']) => void;
    logout: () => void;
};

// Initialize from localStorage
const getInitialAuthToken = (): string => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('auth_token') ?? '';
    }
    return '';
};

export const useAuthUserStore = create<userState & userActions>((set) => ({
    user: {},
    authToken: getInitialAuthToken(),
    isAuthenticated: false,
    getUser: async () => {
        try {
            const response = await axios.get('/user');

            if (response.status === 200) {
                const user = response.data.user;
                set({ isAuthenticated: true, user });
                return user;
            }
            set({ isAuthenticated: false, user: {} });
            return null;
        } catch {
            // Handle errors (network errors, 401, 500, etc.)
            set({ isAuthenticated: false, user: {} });
            return null;
        }
    },
    setUser: (user: userState['user']) => {
        localStorage.setItem('user', JSON.stringify(user));
        set({ user });
    },
    setAuthToken: (token: userState['authToken']) => {
        localStorage.setItem('auth_token', token);
        set({ authToken: token });
    },
    setIsAuthenticated: (isAuthenticated: userState['isAuthenticated']) =>
        set({ isAuthenticated }),
    logout: () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
        set({ user: {}, authToken: '', isAuthenticated: false });
    },
}));
