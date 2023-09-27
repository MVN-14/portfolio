import "./globals.css";
import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";

const font = Courier_Prime({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Nogueira",
  description: "Michael's developer portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-background text-text h-full w-full`}
      >
        {children}
      </body>
    </html>
  );
}
