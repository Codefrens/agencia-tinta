import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/index.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LandingFooter from "@/components/LandingsPage/LandingFooter";
import LenisProvider from "@/utils/LenisProvider/LenisProvider";
import { SEO_METADATA } from "@/utils/SEOmetadata";
import { headers } from "next/headers";

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
  
  // Detectar si estamos en una landing page
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || headersList.get("x-url") || "";
  const isLandingPage = pathname.includes("production")
  
  if (isLandingPage) {
    return (
      <html lang={lang}>
        <body className={`${dmSans.variable}`}>
          <LenisProvider>
            <main>
              {children}
            </main>
            <LandingFooter lang={lang} />
          </LenisProvider>
        </body>
      </html>
    );
  }

  // Layout normal para páginas generales
  return (
    <html lang={lang}>
      <body className={`${dmSans.variable}`}>
        <LenisProvider>
          <Navbar lang={lang} />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
