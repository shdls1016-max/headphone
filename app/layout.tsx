import type { Metadata } from "next";
import { headers } from "next/headers";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "auralab.audio";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  return {
    metadataBase: base,
    title: "AURALAB — Hear Beyond",
    description: "몰입을 설계하는 프리미엄 헤드셋 브랜드 AURALAB",
    openGraph: { title: "AURALAB — Hear Beyond", description: "침묵은 더 깊게, 디테일은 더 선명하게.", images: [new URL("/og.png", base)] },
    twitter: { card: "summary_large_image", title: "AURALAB — Hear Beyond", images: [new URL("/og.png", base)] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
