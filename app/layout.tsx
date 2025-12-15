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
    icon: "/app/Assests/imgs/main_logo.png", // yahan spelling sahi honi chahiye
    apple: "/app/Assets/imgs/main_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased relative"
        style={{
          backgroundImage: "url('/app/Assests/imgs/tiktok.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          // color: "#FFFFFF",
        
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
