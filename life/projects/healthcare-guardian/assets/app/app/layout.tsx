import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Healthcare Guardian | Workplace Violence Prevention Training",
  description: "Healthcare Guardian is the only training program built specifically for frontline healthcare workers — scenario-driven, neuroscience-backed, and designed to change behavior, not just check a box.",
  keywords: "healthcare violence prevention, workplace safety training, nurse safety, hospital training, de-escalation training",
  authors: [{ name: "Healthcare Guardian" }],
  openGraph: {
    title: "Healthcare Guardian | Workplace Violence Prevention Training",
    description: "Scenario-driven training that builds real skills for frontline healthcare workers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
