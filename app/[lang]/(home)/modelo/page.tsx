import Script from "next/script";
import ModelViewer from "@/components/ui/ModelViewer";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}): Promise<Metadata> => {
  const lang = (await params).lang;
  const baseUrl = process.env.BASE_URL || "https://agenciatinta.com";
  const canonical = `${baseUrl}/${lang}/modelo`;
  const title = lang === "es" ? "Modelo 3D | Agencia Tinta" : "3D Model | Tinta Agency";
  const description =
    lang === "es"
      ? "Visualización 3D interactiva."
      : "Interactive 3D visualization.";
  const siteName = lang === "es" ? "Agencia Tinta" : "Tinta Agency";
  const ogImage =
    "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg";

  return {
    title,
    description,
    robots: "index, follow",
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
      locale: lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [ogImage],
    },
  };
};

const ModeloPage = () => {
  return (
    <div>
      {/* Cargar el script correctamente */}
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />

      {/* Usar el componente personalizado */}

      <ModelViewer
        src="https://res.cloudinary.com/nicojoystin/image/upload/v1741798340/agencia-tinta/plato_1_fo1m31.glb"
        alt="comida"
        ar
        arModes="webxr scene-viewer quick-look"
        shadowIntensity={1}
        cameraControls
        touchAction="pan-y"
        autoRotate
      />
    </div>
  );
};

export default ModeloPage;
