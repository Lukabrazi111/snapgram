export default function FieldError({ message }: { message: string | undefined }) {
    return <span className="text-red-500 text-sm mt-1">{message}</span>;
}
