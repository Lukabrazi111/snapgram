import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthUserStore } from '@/stores/authUserStore';

export const GuestRoutes = () => {
    const getUser = useAuthUserStore((state) => state.getUser);
    const isAuthenticated: boolean = useAuthUserStore(
        (state) => state.isAuthenticated,
    );
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const authToken: string = localStorage.getItem('auth_token') ?? '';
            if (!authToken) {
                setIsChecking(false);
                return;
            }
            await getUser();
            setIsChecking(false);
        };

        checkAuth();
    }, [getUser]);

    if (isChecking) {
        return null;
    }

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};
