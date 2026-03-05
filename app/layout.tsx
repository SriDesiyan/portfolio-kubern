import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Desiyan V | AI Engineer & Cybersecurity Researcher",
  description: "AI Engineer, Cybersecurity Researcher, and Hackathon Champion from Chennai. Building AI systems that protect the internet, power public safety, and solve real-world problems.",
  keywords: ["AI Engineer", "Cybersecurity", "Computer Vision", "OSINT", "Machine Learning", "Sri Desiyan V"],
  authors: [{ name: "Sri Desiyan V" }],
  openGraph: {
    title: "Sri Desiyan V | AI Engineer",
    description: "HacKP 2025 Winner | AI & Cybersecurity Researcher | Computer Vision Engineer",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#030712" />
      </head>
      <body>{children}</body>
    </html>
  );
}
