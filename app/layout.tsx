import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Respawn Zone",
  description: "Donde cada partida cuenta y se siente real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
<body className="min-h-full flex flex-col bg-[#0B0F19] text-white">

  <Navbar />

  {children}

  <footer className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
    Respawn Zone © 2026 | Donde cada partida cuenta y se siente real.
  </footer>

</body>
    </html>
  );
}