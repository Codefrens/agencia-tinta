import LandingFooter from "@/components/LandingsPage/LandingFooter/LandingFooter";
import LandingNavbar from "@/components/LandingsPage/LandingNavbar";

export default async function LandingsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const lang = (await params).lang;
  return (
    <>
      <LandingNavbar />
      <main>
        {children}
      </main>
      <LandingFooter lang={lang} />
    </>
  );
}