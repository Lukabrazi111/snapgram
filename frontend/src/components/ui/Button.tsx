export default function Button({
    label,
    disabled,
    ...props
}: {
    label: string;
    type: 'button' | 'submit' | undefined;
    disabled?: boolean;
}) {
    return (
        <button
            type={props.type}
            disabled={disabled}
            className="bg-primary text-white px-4 py-2 text-center rounded-md font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {label}
        </button>
    );
}
