import type { ReactElement } from 'react';
import { cloneElement } from 'react';

interface IconProps {
    className?: string;
}

export default function PageTitle({
    title,
    icon,
}: {
    title: string;
    icon?: ReactElement<IconProps>;
}) {
    return (
        <div className={icon ? 'flex items-center space-x-4' : ''}>
            {icon &&
                cloneElement(icon, {
                    className: `w-10 h-10 text-white ${icon.props.className || ''}`,
                })}
            <h1 className="text-white font-bold text-3xl">{title}</h1>
        </div>
    );
}
