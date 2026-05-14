import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ikigAI Code | Build your AI operating system",
  description:
    "A six-module build-your-own-AI-operating-system program for operators, coaches, and founders. Stop using AI as a tool. Start running it as infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${dmSans.variable} antialiased`}
    >
      <body className="bg-warm-white text-forest-muted">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
