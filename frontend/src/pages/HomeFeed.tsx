import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Slide, toast, ToastContainer } from 'react-toastify';

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
        <div>
            <h1 className={'text-white text-2xl'}>Home Feed</h1>
            <ToastContainer transition={Slide} closeOnClick={true} />
        </div>
    );
}
