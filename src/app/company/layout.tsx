import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who we are and why we are building 8AM, smarter and safer school transport for India.",
  alternates: { canonical: "/company" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
