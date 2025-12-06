import type { Metadata } from "next";
import { Inter, Geist_Mono, PT_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PIXXELORBIT — Web Development & SMMA",
  description:
    "Minimal, high-performance web development and social media marketing.",
  keywords: [
    "PIXXELORBIT",
    "web development",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "social media marketing",
    "SMMA",
    "landing pages",
    "SEO",
    "performance",
  ],
  openGraph: {
    title: "PIXXELORBIT — Web Development & SMMA",
    description:
      "Minimal, high-performance web development and social media marketing.",
    type: "website",
    locale: "en_US",
    siteName: "PIXXELORBIT",
  },
  twitter: {
    card: "summary_large_image",
    title: "PIXXELORBIT — Web Development & SMMA",
    description:
      "Minimal, high-performance web development and social media marketing.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var s=localStorage.getItem('theme');var c=document.documentElement.classList;if(s==='dark'){c.add('dark');}else{c.remove('dark');}}catch(e){}})();",
          }}
        />
      </head>
      <body suppressHydrationWarning
        className={`${inter.variable} ${geistMono.variable} ${ptSerif.variable} antialiased font-sans`}
      >
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main" className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
