export default function InputField({
  label,
  ...props
}: {
  label: string;
  id: string;
  name: string;
  type: string | undefined;
}) {
  return (
    <>
      <div className="flex flex-col space-y-1">
        <label htmlFor={props.name} className="font-bold">
          {label}
        </label>
        <input
          {...props}
          className="bg-surface border border-transparent px-2 py-3 rounded-md focus:outline-none focus:border-muted focus:border"
        />
      </div>
    </>
  );
}
