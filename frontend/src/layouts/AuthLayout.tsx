export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full min-h-screen justify-center items-center">
      <div className="flex-1 flex flex-col items-center justify-center px-5 sm:px-0">
        {children}
      </div>
      <div className="flex-1 h-screen w-full hidden lg:block">
        <img
          src="/images/side-img.svg"
          alt="side-img"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}
