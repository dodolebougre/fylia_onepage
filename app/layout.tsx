import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Fylia",
  description: "Mise en relation d'artiste et d'amateur d'art",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <script async src="https://tally.so/widgets/embed.js"></script>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <link rel="icon" href="/assets/icon/Logo Fylia (6).png" sizes="64*64" />
      </head>
      <body>
        <main>
          {children}
          <Analytics />
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
