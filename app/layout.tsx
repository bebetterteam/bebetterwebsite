import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import "@/framer/styles.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bebetter.co.th"),
  title: {
    default: "Bebetter — Digital solutions at a price that makes sense",
    template: "%s — Bebetter",
  },
  description:
    "Bebetter is a digital agency in Bangkok. Marketing campaigns, content, websites, automations, LINE and AI solutions for SMEs, startups, and individuals.",
  openGraph: {
    title: "Bebetter — Digital solutions at a price that makes sense",
    description:
      "A digital agency in Bangkok building content, websites, automations, LINE and AI solutions at a price that makes sense.",
    type: "website",
    locale: "en_US",
  },
  icons: { icon: "/logo-mark.png", apple: "/logo-mark.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
