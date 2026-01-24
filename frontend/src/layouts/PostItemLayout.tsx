import type { ReactNode } from 'react';

interface PostProps {
    children: ReactNode;
    className?: string;
}

export default function PostItemLayout({ children, className }: PostProps) {
    return (
        <div
            className={`border border-white/10 rounded-lg px-5 py-4 bg-main w-full ${className}`}
        >
            {children}
        </div>
    );
}
