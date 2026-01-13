import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthUserStore } from '@/stores/authUserStore';

export const PrivateRoutes = () => {
    const { getUser, isAuthenticated } = useAuthUserStore();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            await getUser();
            setIsChecking(false);
        };

        checkAuth();
    }, [getUser]);

    if (isChecking) {
        return null; // or a loading spinner
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};
