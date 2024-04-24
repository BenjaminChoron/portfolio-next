export default function MainSection({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <main
      className={`min-h-screen flex justify-center items-center flex-col p-5 pb-16 sm:p-10 sm:pt-32 bg-primary text-secondary ${className}`}
    >
      {children}
    </main>
  );
}
