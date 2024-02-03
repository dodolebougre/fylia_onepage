import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Fylia",
  description:
    "Améliorez le bien-être de vos collaborateurs grâce à l'art personnalisé",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimal-ui"
        />
        <script async src="https://tally.so/widgets/embed.js"></script>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <link rel="icon" sizes="64*64" href="/assets/icon/fyliaicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;500;600;700&family=Philosopher:wght@400;700&family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Belleza&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/athena"
          rel="stylesheet"
        ></link>
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
