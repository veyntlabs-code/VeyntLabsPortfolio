import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veynt Labs — We build what businesses imagine.",
  description:
    "Veynt Labs creates modern digital experiences and solutions for businesses ready to move forward. Web, AI, Design, Automation, Software.",
  keywords: [
    "Veynt Labs",
    "digital agency",
    "web development",
    "AI solutions",
    "software development",
    "automation",
    "UI/UX design",
    "India",
  ],
  authors: [{ name: "Veynt Labs" }],
  openGraph: {
    title: "Veynt Labs — We build what businesses imagine.",
    description:
      "Modern digital experiences and solutions for businesses ready to move forward.",
    url: "https://veyntlabs.com",
    siteName: "Veynt Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veynt Labs — We build what businesses imagine.",
    description:
      "Modern digital experiences and solutions for businesses ready to move forward.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
