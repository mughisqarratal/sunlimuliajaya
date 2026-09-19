import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Andara Cargo - Layanan Import Export Barang Termurah",
  description: "Dapatkan layanan Jasa Import Export Barang yang cepat dan aman untuk kebutuhan bisnis global Anda dengan tim profesional kami.",
  icons: {
    icon: "/andara2.ico",
    shortcut: "/andara2.ico",
    apple: "/andara2.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{fontFamily: "'Plus Jakarta Sans', sans-serif"}}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
