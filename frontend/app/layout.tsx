import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 🎨 Import des polices
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🧠 Métadonnées globales
export const metadata: Metadata = {
  title: "IA MedInfo Assist 💙",
  description: "L’IA qui simplifie le langage médical pour tous — by Crea2Code",
  icons: {
    icon: [
      { url: "/medinfo-assist/favicon.ico", sizes: "any" },
      { url: "/medinfo-assist/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* ✅ Base path pour GitHub Pages */}
        <base href="/medinfo-assist/" />
        <link rel="icon" href="/medinfo-assist/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
