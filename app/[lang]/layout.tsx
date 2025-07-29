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

// Función para detectar si es una landing page
function isLandingPage(pathname: string): boolean {
  // Detecta el grupo de rutas (landings) que es más robusto que buscar solo "production"
  return pathname.includes("/(landings)/") || 
         pathname.includes("/production") || 
         pathname.includes("/landing");
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "es" }>;
}>) {
  const lang = (await params).lang;
  
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  
  // Usar la función mejorada de detección
  const isLanding = isLandingPage(pathname);
  
  console.log("Layout Debug:", { pathname, isLanding }); // Para debugging
  
  if (isLanding) {
    // Layout para Landing Pages - Sin Navbar, con LandingFooter
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

  // Layout normal para páginas generales - Con Navbar y Footer
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
