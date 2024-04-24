export default function Redirect({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  return (
    <a
      className="btn btn-outline border-secondary text-secondary m-2 hover:bg-secondary hover:text-primary hover:border-primary"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
