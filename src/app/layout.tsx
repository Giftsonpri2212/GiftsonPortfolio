import type { Metadata } from "next";
import { Manrope, Reenie_Beanie } from "next/font/google";
import "./globals.css";

const contentFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-content",
  display: "swap",
});

const signatureFont = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giftson Prince | Full Stack Developer Portfolio",
  description:
    "Modern developer portfolio showcasing projects, achievements, system design, coding activity, and technical skills.",
  openGraph: {
    title: "Giftson Prince | Full Stack Developer Portfolio",
    description:
      "Explore projects, achievements, coding profiles, and system design case studies by Giftson Prince.",
    url: "https://example.com",
    siteName: "Giftson Prince Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${contentFont.variable} ${signatureFont.variable}`}>
      <body className="bg-slate-900 text-slate-50 antialiased">{children}</body>
    </html>
  );
}
