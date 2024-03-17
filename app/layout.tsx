import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDF Q&A Assistant",
  description:
    "PDF Q&A Assistant is a simple tool that allows you to quickly and easily find answers to questions in your PDFs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
