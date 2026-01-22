import type { ReactNode } from 'react';

export default function BaseContainer({ children }: { children: ReactNode }) {
    return (
        <div className="w-full max-w-5xl mx-auto mt-14 px-5">{children}</div>
    );
}
