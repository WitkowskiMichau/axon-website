// src/app/layout.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
    <body className="bg-night text-white min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
    </body>
    </html>
  );
};

export default Layout;
