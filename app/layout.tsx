import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Brow Edit - Singleton",
  description: "The Brow Edit specialises in custom brows and lash lifts, completely tailored to you.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    ><head><Script id="timelyScript" src="https://book.gettimely.com/widget/book-button-v1.5.js" strategy="beforeInteractive"/></head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
