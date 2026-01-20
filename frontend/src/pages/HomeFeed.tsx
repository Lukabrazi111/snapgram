import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Slide, toast, ToastContainer } from 'react-toastify';
import AppLayout from '@/layouts/AppLayout';
import BaseContainer from '@/components/BaseContainer';

export default function HomeFeed() {
    const location = useLocation();

    useEffect(() => {
        const message = location?.state?.message;

        if (message) {
            toast.success(message);
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    return (
        <AppLayout>
            <BaseContainer>
                <h1 className="text-white font-bold text-3xl">Home Feed</h1>
                <ToastContainer transition={Slide} closeOnClick={true} />
            </BaseContainer>
        </AppLayout>
    );
}
