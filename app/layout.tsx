import type { Metadata } from "next";
import { Oswald, Roboto_Serif } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const roboto = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Lab of Madness",
  description: "Created by Ruben Spaan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
