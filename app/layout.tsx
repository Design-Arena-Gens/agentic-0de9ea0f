import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Jackpot Coin Scout",
  description:
    "Explore curated collectible coins under 100€ with outsized long-term potential and smart collecting tips."
};

const fontStack = [
  "-apple-system",
  "BlinkMacSystemFont",
  "\"Segoe UI\"",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "\"Open Sans\"",
  "\"Helvetica Neue\"",
  "sans-serif"
].join(", ");

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <style>{`:root { --font-stack: ${fontStack}; }`}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
