import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Who_is_selemun",
  description:
    "Computer Science and Engineering graduate specializing in NLP for low-resource languages, machine translation, and full-stack web development. CGPA 3.87/4.00.",
  keywords: [
    "Selemun Abrha", "AI researcher", "NLP", "low-resource languages",
    "machine translation", "Tigrigna", "Mekelle University", "portfolio",
  ],
  authors: [{ name: "Selemun Abrha Teklu" }],
  openGraph: {
    title: "Selemun Abrha Teklu | AI/ML Researcher",
    description: "Building domain-adapted NLP systems for low-resource languages.",
    images: ["/Solomon.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selemun Abrha Teklu | AI/ML Researcher",
    images: ["/Solomon.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}