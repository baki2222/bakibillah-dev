import type { Metadata, Viewport } from "next";
import { Fraunces, Spline_Sans, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--ff-serif" });
const sans = Spline_Sans({ subsets: ["latin"], variable: "--ff-sans" });
const mono = Spline_Sans_Mono({ subsets: ["latin"], variable: "--ff-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bakibillah.dev"),
  title: "Baki Billah — AI Engineer & Full-Stack Developer",
  description:
    "I build AI products that work in production: LLM agents, RAG chatbots, and full-stack SaaS apps with Next.js and Python. Five live products you can open today.",
  openGraph: {
    title: "Baki Billah — AI Engineer & Full-Stack Developer",
    description: "LLM agents, RAG chatbots, and full-stack SaaS apps. Five real, shipped products.",
    url: "https://bakibillah.dev",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4EFE6",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Motion styles only apply once JS is running, so the page is fully readable without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
