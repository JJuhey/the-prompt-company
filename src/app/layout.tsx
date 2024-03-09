import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@app/menu/TopBar";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "The Prompt Company",
  description: "Prompt Company Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white dark:bg-zinc-900 text-black dark:text-white font-sans">
          <TopBar />
          {children}
        </div>
      </body>
    </html>
  );
}
