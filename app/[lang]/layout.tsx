import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/index.css";
import LenisProvider from "@/utils/LenisProvider/LenisProvider";
import { SEO_METADATA } from "@/utils/SEOmetadata";
import { GoogleTagManager } from "@next/third-parties/google";
import { GTM_ID } from "@/utils/gtm";
import RecaptchaProvider from "@/components/providers/RecaptchaProvider";
import { PageViewTracker } from "@/components/GoogleTagManager";
import Script from "next/script";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
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
    <html lang={lang} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="z1d_IZR_ALntZVSmGYBAiekspOvd19fUWolUuYaCI-w" />
        <Script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/72d1e76e213845e304a05a39/script.js"
        />
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${process.env.BASE_URL || "https://agenciatinta.com"}#organization`,
                name: lang === "es" ? "Agencia Tinta" : "Tinta Agency",
                url: `${process.env.BASE_URL || "https://agenciatinta.com"}/${lang}`,
                sameAs: [
                  "https://www.instagram.com/agenciatinta/",
                  "https://www.tiktok.com/@agenciatinta",
                ],
              },
              {
                "@type": "WebSite",
                "@id": `${process.env.BASE_URL || "https://agenciatinta.com"}#website`,
                url: `${process.env.BASE_URL || "https://agenciatinta.com"}/${lang}`,
                name: lang === "es" ? "Agencia Tinta" : "Tinta Agency",
                publisher: {
                  "@id": `${process.env.BASE_URL || "https://agenciatinta.com"}#organization`,
                },
                inLanguage: lang,
              },
            ],
          })}
        </Script>
      </head>
      <body className={`${dmSans.variable}`} suppressHydrationWarning>
        <RecaptchaProvider>
          <LenisProvider>{children}</LenisProvider>
        </RecaptchaProvider>
        <PageViewTracker />
        <GoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
