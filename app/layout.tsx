import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Head from 'next/head';

const anonpro = Anonymous_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Prompt Engineering Examples",
  description: "Prompt Engineering Examples by Dalena Tran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={anonpro.className}>
        <Header />
        <Main >
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}