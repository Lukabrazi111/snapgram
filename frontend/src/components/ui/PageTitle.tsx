export default function PageTitle({ title }: { title: string }) {
    return (
        <div>
            <h1 className="text-white font-bold text-3xl">{title}</h1>
        </div>
    );
}
