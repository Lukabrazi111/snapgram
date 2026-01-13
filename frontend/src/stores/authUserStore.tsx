import { create } from 'zustand';
import axios from '@/configs/axios.tsx';

type userState = {
    user: object;
    authToken: string;
    isAuthenticated: boolean;
};

type userActions = {
    getUser: () => Promise<userState['user'] | null>;
    setAuthToken: (token: userState['authToken']) => void;
    setUser: (user: userState['user']) => void;
    setIsAuthenticated: (isAuthenticated: userState['isAuthenticated']) => void;
    logout: () => void;
};

// Initialize state from localStorage
const getInitialState = (): Pick<userState, 'user' | 'authToken'> => {
    if (typeof window === 'undefined') {
        return { user: {}, authToken: '' };
    }

    const token = localStorage.getItem('auth_token') ?? '';
    const userStr = localStorage.getItem('user');
    let user = {};
    if (userStr) {
        try {
            user = JSON.parse(userStr);
        } catch {
            user = {};
        }
    }

    return { user, authToken: token };
};

const initialState = getInitialState();

export const useAuthUserStore = create<userState & userActions>((set) => ({
    user: initialState.user,
    authToken: initialState.authToken,
    isAuthenticated: false,
    getUser: async () => {
        try {
            const response = await axios.get('/user');
            if (response.status === 200) {
                const user = response.data; // get user data from response
                // Save to localStorage and update state
                set({ isAuthenticated: true });
                return user;
            }
            set({ isAuthenticated: false, user: {} });
            return null;
        } catch {
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
