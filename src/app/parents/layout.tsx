import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Parents",
  description: "Know exactly when your child boards, where the bus is, and when they reach school. Free for parents at partner schools.",
  alternates: { canonical: "/parents" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
