import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions of Use | 8 AM",
  description: "Terms and Conditions forming a legally binding agreement between you and 8AM Technologies Private Limited for use of the 8 AM transit notification service.",
  alternates: { canonical: "/terms" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
