import type { TextareaHTMLAttributes } from 'react';

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

export default function TextAreaField({
    label,
    className,
    disabled,
    ...props
}: TextAreaFieldProps) {
    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor={props.name}>{label}</label>
            <textarea
                name={props.name}
                cols={30}
                rows={6}
                {...props}
                disabled={disabled}
                className={`bg-secondary border border-transparent px-2 py-1 rounded-md focus:outline-none focus:border-muted focus:border ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${className ?? ''}`}
            />
        </div>
    );
}
