import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Suyash | AI-first Full Stack Product Engineer',
  description: 'Futuristic portfolio showcasing AI-native full stack product engineering.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-mesh min-h-screen">{children}</body>
    </html>
  );
}
