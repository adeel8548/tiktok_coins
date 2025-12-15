import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AnimatedBackground } from "@/components/animated-background";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buy TikTok Coins Instantly | Fast & Secure",
  description:
    "Purchase TikTok coins instantly with secure payment methods. Fast, secure, and easy coin transfers.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/app/Assests/imgs/main_logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/app/Assests/imgs/main_logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/app/Assests/imgs/main_logo.png",
        type: "image/png",
      },
    ],
    apple: "/app/Assests/imgs/main_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased relative`}>
        <AnimatedBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
