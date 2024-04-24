'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DesktopLink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={
        currentPath === href
          ? 'btn btn-outline border-primary text-primary m-2'
          : 'btn btn-outline border-secondary text-primary m-2 hover:bg-primary hover:text-secondary hover:border-secondary'
      }
    >
      {children}
    </Link>
  );
}
