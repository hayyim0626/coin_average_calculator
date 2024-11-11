import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "@/components/ui/NavBar";
import Providers from "./providers";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "코인 평단가 계산기",
  description: "Next로 만들어 본 코인 평단가 계산기"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NavBar />
          <main className="pt-16 max-w-screen-2xl mx-auto h-full">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
