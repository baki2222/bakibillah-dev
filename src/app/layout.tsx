import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--ff-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--ff-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--ff-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bakibillah.dev"),
  title: "Baki Billah — AI Engineer & Full-Stack Developer",
  description:
    "I build AI products that work in production: LLM agents, RAG chatbots, and full-stack SaaS apps with Next.js and Python.",
  openGraph: {
    title: "Baki Billah — AI Engineer & Full-Stack Developer",
    description: "LLM agents, RAG chatbots, and full-stack SaaS apps. See live projects.",
    url: "https://bakibillah.dev",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
