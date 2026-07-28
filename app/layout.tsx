import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Banda Santa Terezinha | Música que transforma",
  description: "Há 25 anos formando músicos e novos talentos em Mogi Guaçu por meio de educação musical gratuita, concertos e ações socioculturais.",
  icons: {
    icon: "/midias/logo.png",
    shortcut: "/midias/logo.png",
  },
  openGraph: {
    title: "Banda Santa Terezinha — 25 anos",
    description: "Música, educação e transformação social em Mogi Guaçu desde 2001.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1792, height: 922, alt: "Banda Santa Terezinha — 25 anos de música que transforma" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banda Santa Terezinha — 25 anos",
    description: "Música, educação e transformação social em Mogi Guaçu desde 2001.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
