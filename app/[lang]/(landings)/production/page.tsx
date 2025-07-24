import Hero from "@/components/LandingsPage/Hero";
import { loadLocalContent } from "@/content/fetch";

export default async function ProductionPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {

  const lang = (await params).lang;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content = loadLocalContent("landings", lang, "production") as any;

  return (
    <main>
      <Hero
        title={content.hero.title}
        subtitle={content.hero.description}
        backgroundImage={content.hero.backgroundImage}
      >
        {/* Aquí puedes agregar tu formulario de contacto */}
        <div style={{ 
          padding: "20px", 
          textAlign: "center", 
          color: "#333" 
        }}>
          <h3 style={{ marginBottom: "10px" }}>¿Interesado?</h3>
          <p>Aquí irá tu formulario de contacto</p>
        </div>
      </Hero>
    </main>
  );
}