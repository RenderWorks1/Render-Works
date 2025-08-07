import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Render Works - AI Video Generation for Real Estate",
  description: "Transform your unbuilt developments into cinematic video walkthroughs using cutting-edge AI. Perfect for ads, listings, and presales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
