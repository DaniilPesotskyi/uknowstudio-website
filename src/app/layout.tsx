import "./globals.css";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { createClient } from "@/prismicio";

import Header from "@/common/Header/Header";
import Footer from "@/common/Footer/Footer";

const nunito = Nunito({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "UKNOW? studio",
    description: settings.data.meta_description || "Photography team website",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={nunito.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
