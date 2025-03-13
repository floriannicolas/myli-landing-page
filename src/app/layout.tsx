import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mosvita = localFont({
  variable: "--font-mosvita",
  src: [
    {
      path: '../fonts/mosvita/mosvita-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/mosvita/mosvita-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/mosvita/mosvita-semi-bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Myli - AI-Powered E-Reputation & Customer Acquisition Platform for Multi-Location Businesses',
  description:
    "Plateforme d'E-réputation et d'Acquisition, pour les chaines d'établissements, perfusée à l'IA et soutenue par une équipe reconnue par la fidélité de nos clients",
  icons: {
    icon: [{ url: '/meta/favicon.png' }, { url: '/meta/favicon-dark.png', media: '(prefers-color-scheme: dark)' }],
    apple: [{ url: '/meta/favicon.png' }, { url: '/meta/favicon-apple-x3.png', sizes: '196x196', type: 'image/png' }],
  },
  openGraph: {
    url: process.env.HOST_DOMAIN,
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/meta/og-image-fr.jpg`,
        width: 1200,
        height: 630,
        alt: 'Myli - AI-Powered E-Reputation & Customer Acquisition Platform for Multi-Location Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/meta/og-image-fr.jpg`],
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
        {!process.env.NEXT_PUBLIC_DISABLE_SEO && (
          <script defer data-domain="myli.io" src="https://plausible.io/js/script.js"></script>
        )}
      </head>
      <body className={`${mosvita.variable} antialiased`}>{children}</body>
    </html>
  );
}
