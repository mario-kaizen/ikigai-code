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

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ikigaicode.mariopaguio.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ikigAI Code | Build your AI operating system",
    template: "%s | ikigAI Code",
  },
  description:
    "A six-module build-your-own-AI-operating-system program for operators, coaches, and founders. Stop using AI as a tool. Start running it as infrastructure.",
  authors: [{ name: "Mario Paguio" }],
  creator: "Mario Paguio",
  openGraph: {
    type: "website",
    title: "ikigAI Code | Build your AI operating system",
    description:
      "Six modules. Six artifacts. One outcome: a working AI operating system that compounds, sounds like you, and survives every model upgrade.",
    siteName: "ikigAI Code",
    url: BASE_URL,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "ikigAI Code | Build your AI operating system",
    description:
      "Stop using AI as a tool. Start running it as infrastructure. A program by Mario Paguio.",
    creator: "@marario",
  },
  robots: {
    index: true,
    follow: true,
  },
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
