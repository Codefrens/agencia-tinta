import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/index.css";
import LenisProvider from "@/utils/LenisProvider/LenisProvider";
import { SEO_METADATA } from "@/utils/SEOmetadata";
import { GoogleTagManager } from "@next/third-parties/google";
import { GTM_ID } from "@/utils/gtm";
import RecaptchaProvider from "@/components/providers/RecaptchaProvider";
import { PageViewTracker } from "@/components/GoogleTagManager";

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
      <body className={`${dmSans.variable}`}>
        <RecaptchaProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </RecaptchaProvider>
        <PageViewTracker />
        <GoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
