import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fylia",
  description: "Mise en relation d'artiste et d'amateur d'art",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="64*64"/>
      </head>
      <body className={cormorant.className}>
        <Navbar />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
