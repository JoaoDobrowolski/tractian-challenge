import type { Metadata } from "next";
import { ReactNode } from "react";

import "@styles/settings.scss";

export const metadata: Metadata = {
  title: "Tractian Frontend",
  description: "Tractian Challenge for Frontend Role",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
