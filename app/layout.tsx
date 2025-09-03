import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lukáš Čeč",
  description: "Personal portfolio of Lukáš Čeč, a passionate web developer from Slovakia.",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
        <body className="h-full bg-neutral-950 text-neutral-200 antialiased">

        <SiteShell>{children}</SiteShell>
        </body>
        </html>
    ); 
}

