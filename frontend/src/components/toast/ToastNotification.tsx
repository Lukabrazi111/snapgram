import { Slide, ToastContainer } from 'react-toastify';

interface ToastNotificationProps {
    transition?: typeof Slide;
    closeOnClick?: boolean;
}

export const ToastNotification = ({
    transition,
    closeOnClick,
}: ToastNotificationProps) => {
    return (
        <ToastContainer transition={transition} closeOnClick={closeOnClick} />
    );
};
