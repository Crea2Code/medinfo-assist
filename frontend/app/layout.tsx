import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IA MedInfo Assist 💙",
  description: "L’IA qui simplifie le langage médical pour tous — by Crea2Code",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="MedInfo Assist — L’IA qui vulgarise les textes médicaux et donne des conseils santé."
        />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/medinfo-assist/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/medinfo-assist/favicon-512.png"
        />
        <title>MedInfo Assist 💙</title>
      </head>

      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
