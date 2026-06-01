import Clients from "@/components/Clients";
import Cta from "@/components/Cta";
import { getTranslations } from "../../translations";
import ImageCarrousel from "@/components/ui/ImageCarrousel";
import AgencyInformation from "@/components/AgencyPage/AgencyInformation";
import { Metadata } from "next";
import { SEO_METADATA } from "@/utils/SEOmetadata";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}): Promise<Metadata> => {
  const lang = (await params).lang;
  return SEO_METADATA["agencyPage"][lang];
};

export default async function AgencyPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { common, agencyPage } = await getTranslations(lang);
  const { cta } = common;

  return (
    <main>
      <ImageCarrousel />
      <AgencyInformation translations={agencyPage} />
      <Clients />
      <Cta translations={cta} />
    </main>
  );
}
