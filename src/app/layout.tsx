import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import InstallPrompt from "@/components/InstallPrompt";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Next.js Mobile PWA",
    description: "A simple Next.js PWA boilerplate",
    manifest: "/manifest.webmanifest",
};

export const viewport = {
    themeColor: "#000000",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen pb-16`}
            >
                <main className="max-w-2xl mx-auto min-h-screen relative">
                    {children}
                    <InstallPrompt />
                    <BottomNav />
                </main>
            </body>
        </html>
    );
}
