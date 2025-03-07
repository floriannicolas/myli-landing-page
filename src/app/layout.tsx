import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mosvita = localFont({
  variable: "--font-mosvita",
  src: [
    {
      path: "../fonts/mosvita/mosvita-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/mosvita/mosvita-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/mosvita/mosvita-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/mosvita/mosvita-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/mosvita/mosvita-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/mosvita/mosvita-extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/mosvita/mosvita-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title:
    "Myli - AI-Powered E-Reputation &amp; Customer Acquisition Platform for Multi-Location Businesses",
  description:
    "Plateforme d&#39;E-réputation et d&#39;Acquisition, pour les chaines d&#39;établissements, perfusée à l&#39;IA et soutenue par une équipe reconnue par la fidélité de nos clients",
  icons: {
    icon: [
      { url: "/images/favicon.png" },
      {
        url: "/images/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mosvita.variable} antialiased`}>{children}</body>
    </html>
  );
}
