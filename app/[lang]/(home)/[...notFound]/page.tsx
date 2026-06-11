import Container from "@/components/ui/Container";
import Hero from "@/components/NotFoundPage/Hero";
import { getTranslations } from "../../translations";

export default async function NotFoundPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { common } = await getTranslations(lang);

  return (
    <Container>
      <Hero
        title={common.notFoundTitle}
        subtitle={common.notFoundSubtitle}
        button={common.notFoundButtonLabel}
        href={`/${lang}`}
      />
    </Container>
  );
}
