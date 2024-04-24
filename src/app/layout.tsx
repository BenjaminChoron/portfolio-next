import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Benjamin Choron - Software Engineer',
  description:
    "Bienvenue sur mon site personnel. Vous y trouverez l'ensemble de mes projets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="light">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
