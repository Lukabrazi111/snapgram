import { create } from 'zustand';
import axios from '@/configs/axios.tsx';

export interface User {
    id?: number;
    name: string;
    username: string;
    email?: string;
    image?: string;
}

type UserState = {
    user: User;
    authToken: string;
    isAuthenticated: boolean;
};

type UserActions = {
    getUser: () => Promise<User | null>;
    setAuthToken: (token: string) => void;
    setUser: (user: User) => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    logout: () => void;
};

const emptyUser: User = { name: '', username: '' };

// Initialize state from localStorage
const getInitialState = (): Pick<UserState, 'user' | 'authToken'> => {
    if (typeof window === 'undefined') {
        return { user: emptyUser, authToken: '' };
    }

    const token = localStorage.getItem('auth_token') ?? '';
    const userStr = localStorage.getItem('user');
    let user: User = emptyUser;
    if (userStr) {
        try {
            user = JSON.parse(userStr) as User;
        } catch {
            user = emptyUser;
        }
    }

    return { user, authToken: token };
};

const initialState = getInitialState();

export const useAuthUserStore = create<UserState & UserActions>((set) => ({
    user: initialState.user,
    authToken: initialState.authToken,
    isAuthenticated: false,
    getUser: async () => {
        try {
            const response = await axios.get('/user');
            if (response.status === 200) {
                const user = response.data as User;
                set({ isAuthenticated: true, user });
                return user;
            }
            set({ isAuthenticated: false, user: emptyUser });
            return null;
        } catch {
            set({ isAuthenticated: false, user: emptyUser });
            return null;
        }
    },
    setUser: (user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
        set({ user });
    },
    setAuthToken: (token: string) => {
        localStorage.setItem('auth_token', token);
        set({ authToken: token });
    },
    setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
    logout: () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
        set({ user: emptyUser, authToken: '', isAuthenticated: false });
    },
}));
