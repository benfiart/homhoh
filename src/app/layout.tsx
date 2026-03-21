import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siamcoffees.com"),
  title: "Siam Coffees — Mountain Coffee, Mountain People",
  description:
    "Direct-trade coffee from 25 Karen Tribe farming families in Mae Hong Son, Thailand to Milwaukee, Wisconsin. Every dollar returned to the people who grow it.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Siam Coffees — Mountain Coffee, Mountain People, Karen Tribe",
    description:
      "Direct-trade specialty Arabica from 25 Karen Tribe families in the mountains of Northern Thailand. Roasted in Milwaukee. 100% of profits returned to the farmers.",
    url: "https://siamcoffees.com",
    siteName: "Siam Coffees",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jack with Manop and his family at the coffee farm in Mae Hong Son, Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siam Coffees — Mountain Coffee, Mountain People, Karen Tribe",
    description:
      "Direct-trade specialty Arabica from 25 Karen Tribe families in Northern Thailand. 100% of profits returned to the farmers.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://siamcoffees.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-cream-50 text-brown-900`}
      >
        {children}
      </body>
    </html>
  );
}
