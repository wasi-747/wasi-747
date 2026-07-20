import type { Metadata } from "next";
import { Inter, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Wasiur Rahman Sakib | Full-Stack Software Engineer & Architect",
  description: "I build high-performance web architectures, IoT telemetry ecosystems, and intelligent AI-integrated applications.",
  keywords: ["Software Engineer", "Full-Stack Architect", "AI Agents", "IoT Telemetry", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Wasiur Rahman Sakib" }],
  openGraph: {
    title: "Wasiur Rahman Sakib | Full-Stack Software Engineer & Architect",
    description: "I build high-performance web architectures, IoT telemetry ecosystems, and intelligent AI-integrated applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-zinc-100 font-sans">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
