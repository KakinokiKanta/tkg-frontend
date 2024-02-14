import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "@/layouts/Header";
import NextAuthProvider from "@/components/providers/NextAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tkg",
  description:
    "GitHubの草を使って育てるマイキャラ育成アプリ!たまごっちをオマージュしてます",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
