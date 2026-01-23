import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthUserStore } from '@/stores/authUserStore';

export const PrivateRoutes = () => {
    const getUser = useAuthUserStore((state) => state.getUser);
    const isAuthenticated = useAuthUserStore((state) => state.isAuthenticated);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            await getUser();
            setIsChecking(false);
        };

        checkAuth();
    }, [getUser]);

    if (isChecking) {
        return null;
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ message: 'Logged out successfully' }}
            />
        );
    }

    return <Outlet />;
};
