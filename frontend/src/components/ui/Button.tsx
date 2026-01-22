export default function Button({
    label,
    disabled,
    className,
    ...props
}: {
    label: string;
    type: 'button' | 'submit' | undefined;
    className?: string;
    disabled?: boolean;
}) {
    return (
        <button
            type={props.type}
            disabled={disabled}
            className={`bg-primary hover:bg-primary/80 transition-colors text-sm text-white px-4 py-2 text-center rounded-md font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {label}
        </button>
    );
}
