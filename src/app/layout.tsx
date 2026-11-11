import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const description =
  "8AM is a routing-intelligence platform for Indian school transport: live bus tracking, RFID boarding alerts and route optimisation for schools, drivers and parents.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "8AM | Smart School Transport for India",
    template: "%s | 8AM",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "8AM",
    title: "8AM | Smart School Transport for India",
    description,
    images: [{ url: "/media/hero-poster.jpg", width: 1280, height: 720 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/media/icon-192.png",
    apple: "/media/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F7F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
