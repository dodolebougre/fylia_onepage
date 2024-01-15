import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Fylia",
  description:
    "Création d'impression murale premium à partir de vos plus belles photos",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async src="https://tally.so/widgets/embed.js"></script>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <link rel="icon" href="/assets/icon/Logo Fylia (6).png" sizes="64*64" />
      </Head>
      <body>
        <main>
          {children}
          <Analytics />
          <Footer />
        </main>
      </body>
    </>
  );
};

export default RootLayout;
