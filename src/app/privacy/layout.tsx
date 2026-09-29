import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 8 AM",
  description: "Learn how 8AM Technologies Private Limited collects, uses, shares and protects student and parent personal data under the DPDP Act 2023.",
  alternates: { canonical: "/privacy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
