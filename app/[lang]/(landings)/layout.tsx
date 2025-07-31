import LandingFooter from "@/components/LandingsPage/LandingFooter/LandingFooter";

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
      <main>
        {children}
      </main>
      <LandingFooter lang={lang} />
    </>
  );
}