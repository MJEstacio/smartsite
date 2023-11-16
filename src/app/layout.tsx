import type { Metadata } from "next";

import "./globals.css";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartSite Studio",
  description: "Sample Task made by Mark Joseph Estacio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
