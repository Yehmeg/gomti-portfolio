import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/background/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://gomti-portfolio.vercel.app";
const siteName = "Gomti Kumari | AI/ML Engineer & Data Scientist";

export const metadata: Metadata = {
  title: {
    default: "Gomti Kumari | AI/ML Engineer & Data Scientist",
    template: "%s | Gomti Kumari",
  },
  description: "AI/ML Engineer and Data Science enthusiast building machine learning systems, predictive analytics solutions, and AI-driven applications.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Data Science",
    "Python",
    "PyTorch",
    "LLMs",
    "MLOps",
    "Predictive Analytics",
    "Gomti Kumari",
    "Portfolio",
  ],
  authors: [{ name: "Gomti Kumari", url: siteUrl }],
  creator: "Gomti Kumari",
  publisher: "Gomti Kumari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Gomti Kumari | AI/ML Engineer & Data Scientist",
    description: "AI/ML Engineer and Data Science enthusiast building machine learning systems, predictive analytics solutions, and AI-driven applications.",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Gomti Kumari - AI/ML Engineer & Data Scientist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gomti Kumari | AI/ML Engineer & Data Scientist",
    description: "AI/ML Engineer and Data Science enthusiast building machine learning systems, predictive analytics solutions, and AI-driven applications.",
    images: [`${siteUrl}/opengraph-image.png`],
    creator: "@GomtiKumari",
  },
  verification: {
    google: "google-site-verification-code",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#050816" },
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}


