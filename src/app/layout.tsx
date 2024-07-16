import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laercio Rios",
  description: "Personal website of Laercio Rios",
  icons: {
    icon: "./favicon.svg",
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
