import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Store Audit: Find Your Revenue Leaks | Wisdm-HPC by WisdmLabs",
  description:
    "Get a free CRO + performance audit for your Shopify or WooCommerce store. Discover exactly where you\u2019re leaking revenue and get a custom fix-it roadmap. Delivered in 24 hours.",
  openGraph: {
    title: "Free Store Audit: Find Your Revenue Leaks | Wisdm-HPC",
    description:
      "Get a comprehensive CRO + technical performance audit showing every revenue leak, its dollar cost, and how to fix it. Free. Delivered in 24 hours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
