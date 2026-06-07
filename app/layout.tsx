import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "HORIVON",
  description: "HORIVON financial copilot and radar for small businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
