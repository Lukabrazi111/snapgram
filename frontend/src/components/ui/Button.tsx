export default function Button({
  label,
  type,
}: {
  label: string;
  type: "button" | "submit" | undefined;
}) {
  return (
    <button
      type={type}
      className="bg-primary text-white px-4 py-2 text-center rounded-md font-bold cursor-pointer"
    >
      {label}
    </button>
  );
}
