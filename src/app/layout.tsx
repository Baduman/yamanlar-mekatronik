import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yamanlar Mekatronik",
  description: "Mekatronik çözümler ve mühendislik hizmetleri",
  icons: {
    icon: '/yamanlar-favicon.png',
    shortcut: '/yamanlar-favicon.png',
    apple: '/yamanlar-favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" type="image/png" href="/yamanlar-favicon.png" />
        <link rel="shortcut icon" href="/yamanlar-favicon.png" />
        <link rel="apple-touch-icon" href="/yamanlar-favicon.png" />
        <link rel="icon" href="/yamanlar-favicon.png" />
      </head>
      <body
        className={`${baiJamjuree.variable} antialiased`}
      >
        <LanguageProvider>
          <TopBar />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
