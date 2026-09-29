import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Schools",
  description: "Fleet visibility, RFID attendance and route optimisation for school transport teams.",
  alternates: { canonical: "/schools" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
