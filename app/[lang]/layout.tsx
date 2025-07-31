import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/index.css";
import LenisProvider from "@/utils/LenisProvider/LenisProvider";
import { SEO_METADATA } from "@/utils/SEOmetadata";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import { GTM_ID } from "@/utils/gtm";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const generateMetadata = async ({
  params,
}: {
  params: { lang: "en" | "es" };
}): Promise<Metadata> => {
  const lang = (await params).lang;
  return SEO_METADATA["homePage"][lang];
};



export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "es" }>;
}>) {
  const lang = (await params).lang;
  
  return (
    <html lang={lang}>
      <head>
        <GoogleTagManager gtmId={GTM_ID} />
      </head>
      <body className={`${dmSans.variable}`}>
        <GoogleTagManagerNoScript gtmId={GTM_ID} />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
