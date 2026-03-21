import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body className="bg-slate-900 text-slate-50">{children}</body>
    </html>
  );
}
