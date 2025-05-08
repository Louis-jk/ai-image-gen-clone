import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ai Image Generation",
  description: "Ai Image Generation using next.js 15 and shadcn ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-gray-900 text-gray-100 antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="container mx-auto flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
