import './globals.css';
import { DM_Serif_Display, Inter } from 'next/font/google';

const serif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-serif' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[#F3E9D8] text-[#111827] font-sans antialiased">
        <nav className="border-b border-black/10 py-6 px-8 flex justify-between items-center sticky top-0 bg-[#F3E9D8]/80 backdrop-blur-md z-50">
          <h1 className="font-serif text-2xl font-bold">Dragon Roast</h1>
          <div className="space-x-6 text-sm font-medium uppercase tracking-widest">
            <a href="/" className="hover:text-[#C56A3C]">Home</a>
            <a href="/shop" className="hover:text-[#C56A3C]">Shop</a>
            <a href="/story" className="hover:text-[#C56A3C]">Our Story</a>
            <a href="/visit" className="hover:text-[#C56A3C]">Visit</a>
          </div>
        </nav>
        {children}
        <footer className="py-12 px-8 border-t border-black/10 text-center">
          <p>© {new Date().getFullYear()} Dragon Roast Coffee. Built in Cardiff.</p>
        </footer>
      </body>
    </html>
  );
}