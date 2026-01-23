import type { ReactNode } from 'react';

interface BaseContainerProps {
    children: ReactNode;
    className?: string;
}

export default function BaseContainer({
    children,
    className = '',
}: BaseContainerProps) {
    return (
        <div className={`w-full max-w-5xl mx-auto mt-14 px-5 ${className}`}>
            {children}
        </div>
    );
}
