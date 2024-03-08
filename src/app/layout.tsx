import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "~/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open South",
  description:
    "Welcome to Open South, your premier open data platform designed to empower researchers, scholars practitioners, policymakers, and communities within countries in the Global South. Our mission is to facilitate access to valuable data, foster collaboration, and promote sustainable development across diverse domains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
