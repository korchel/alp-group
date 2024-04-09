import "../styles/global.scss";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["cyrillic", "latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Kapibara",
  description: "next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}