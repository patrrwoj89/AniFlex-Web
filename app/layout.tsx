import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAE000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "AniFlex – Anime na Androida i Android TV | Oglądaj za darmo",
  description:
    "AniFlex to darmowa aplikacja do oglądania anime. Agreguje treści z animezone.pl, shinden.pl, ogladajanime.pl i desu-online.pl w jednym miejscu. Bez reklam.",
  applicationName: "AniFlex",
  authors: [{ name: "AniFlex Team" }],
  keywords: [
    "anime",
    "anime po polsku",
    "oglądaj anime za darmo",
    "aniflex",
    "animezone",
    "shinden",
    "desu-online",
    "android tv anime",
    "anime app android",
    "napisy po polsku",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://aniflex.vercel.app/" },
  openGraph: {
    type: "website",
    title: "AniFlex – Anime na Androida i Android TV",
    description:
      "Darmowa aplikacja do oglądania anime z polskimi napisami. Bez reklam, bez opłat.",
    siteName: "AniFlex",
    url: "https://aniflex.vercel.app/",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary",
    title: "AniFlex – Anime na Androida i Android TV",
    description: "Darmowa aplikacja anime z polskimi napisami. Bez reklam.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "AniFlex",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/favicon-64x64.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className="dark">
      <body className="font-sans antialiased bg-[#0f0f0e] text-white overflow-x-hidden relative">
        {/* Subtle diagonal stripe texture */}
        <div className="stripe-bg fixed inset-0 z-[-2] pointer-events-none" />

        {/* Yellow radial glow – top center */}
        <div
          className="fixed inset-0 z-[-1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% -5%, rgba(250,224,0,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Green secondary glow – bottom right */}
        <div
          className="fixed bottom-0 right-0 w-[600px] h-[400px] z-[-1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, rgba(63,115,64,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
