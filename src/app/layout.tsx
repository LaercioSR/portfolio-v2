import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laercio Rios",
  description: "Personal website of Laercio Rios, a fullstack developer",
  manifest: "./manifest.webmanifest",
  icons: {
    icon: "./favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    url: "https://laerciorios.com",
    title: "Laercio Rios",
    siteName: "Laercio Rios",
    description: "Personal website of Laercio Rios, a fullstack developer",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
        alt: "Laercio Rios",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider themes={["light", "dark"]}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
