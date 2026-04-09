import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RecruitAI | Intelligent Talent Acquisition',
  description: 'AI-powered recruitment dashboard for modern teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0a0a0c] text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}