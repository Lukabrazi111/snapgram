export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <img src="/images/side-img.svg" alt="side-img" />
    </div>
  );
}
