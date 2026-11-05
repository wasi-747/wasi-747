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
  title: "Wasiur Rahman Sakib | Junior Software Engineer & Full-Stack Architect",
  description: "Junior Software Engineer at TechDojo Limited. Building scalable distributed systems, IoT telemetry ecosystems, and AI-integrated architectures.",
  keywords: ["Software Engineer", "Full-Stack Architect", "AI Agents", "IoT Telemetry", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Wasiur Rahman Sakib" }],
  openGraph: {
    title: "Wasiur Rahman Sakib | Junior Software Engineer & Full-Stack Architect",
    description: "Junior Software Engineer at TechDojo Limited. Building scalable distributed systems, IoT telemetry ecosystems, and AI-integrated architectures.",
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
      <body className="min-h-full flex flex-col bg-[#070708] text-zinc-100 font-sans relative">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
