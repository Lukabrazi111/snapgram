export default function BaseContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full max-w-5xl mx-auto mt-12 px-5">{children}</div>
    );
}
