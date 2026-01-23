import type { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function InputField({ label, ...props }: InputFieldProps) {
    return (
        <>
            <div className="flex flex-col space-y-1">
                <label htmlFor={props.name}>{label}</label>
                <input
                    {...props}
                    className="bg-surface border border-transparent px-2 py-3 rounded-md focus:outline-none focus:border-muted focus:border"
                />
            </div>
        </>
    );
}
