import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthUserStore } from '@/stores/authUserStore';

export const GuestRoutes = () => {
    const { getUser, isAuthenticated } = useAuthUserStore();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const authToken = localStorage.getItem('auth_token') ?? '';
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
        return null; // or a loading spinner
    }

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};
