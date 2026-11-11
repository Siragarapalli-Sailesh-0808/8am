import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a demo or get support from the 8AM team on WhatsApp, phone or email.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
