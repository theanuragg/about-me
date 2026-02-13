import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag - Full Stack Developer & Designer",
  description:
    "Full stack developer building beautiful and functional web experiences. Explore my portfolio of projects, skills, and experience.",
  keywords: ["web developer", "full stack", "React", "Next.js", "portfolio", "solana", "blockchain", "developer", "designer", "rust", "typescript"],
  authors: [{ name: "Anurag" }],
  creator: "Anurag",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: "Anurag - Portfolio",
    title: "Anurag - Full Stack Developer & Designer",
    description:
      "Full stack developer building beautiful and functional software experiences.",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anurag Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag - Full Stack Developer & Designer",
    description:
      "Full stack developer building beautiful and functional software experiences.",
    images: ["https://yourdomain.com/og-image.png"],
    creator: "@yourhandle",
  },
  icons: {
    icon: "/head.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourdomain.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
