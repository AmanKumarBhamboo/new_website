import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Value Talent Advisory | Strategic Talent Consulting",
  description: "Helping growth-stage organisations align people strategy with performance and long-term ambition. Partnering directly with promoters and leadership teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Navbar />
        <main className="page-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
