import { Translations } from "@/translations/types";
import "server-only";

const translations: Record<"es" | "en", () => Promise<Translations>> = {
  es: () =>
    import("../../translations/es.json").then((module) => module.default),
  en: () =>
    import("../../translations/en.json").then((module) => module.default),
};

export const getTranslations = async (
  locale: "es" | "en"
): Promise<Translations> => translations[locale]();
