'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileLink({
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
          ? 'bg-primary border-t-2 border-secondary text-secondary px-3 py-2 text-sm font-medium mr-3'
          : 'text-primary px-3 py-2 text-sm font-medium mr-3'
      }
    >
      {children}
    </Link>
  );
}
