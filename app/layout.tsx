import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import DeferredAnalytics from "@/components/shared/DeferredAnalytics";
import { gtmId, siteUrl } from "@/data/site/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Niurix",
  description: "Niurix GPON fiber solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const enableAnalytics = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head />
      <body>
        {enableAnalytics ? <DeferredAnalytics gtmId={gtmId} /> : null}

        <Header />
        <main className="pt-[72px] laptop:pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
