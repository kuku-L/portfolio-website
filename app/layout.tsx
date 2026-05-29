import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caveat",   // ← variable 名故意不變，page.tsx 就不用動
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tila Liao",
  description: "I find patterns in data, and possibilities in people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${gloriaHallelujah.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
