//Este es el fetcher de Contentful

import path from "path";
import fs from "fs";
import { notFound } from "next/navigation";

export const fetchContent = async <T>({
  query,
  variables,
  preview = false,
}: {
  query: string;
  variables?: Record<string, unknown>;
  preview?: boolean;
}): Promise<T | undefined> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );
  const { data, errors } = await res.json();

  if (errors) {
    console.log(errors);
    throw new Error("Error getting content");
  }
  return data as T;
};

/**
 * Carga contenido JSON local desde el directorio de traducciones
 * @param contentType - Tipo de contenido (landings, portfolio, etc.)
 * @param lang - Idioma del contenido
 * @param fileName - Nombre del archivo sin extensión
 * @returns Contenido JSON parseado
 */
export const loadLocalContent = <T = unknown>(
  contentType: string,
  lang: "es" | "en",
  fileName: string
): T => {
  const filePath = path.join(
    process.cwd(),
    "translations",
    contentType,
    lang,
    `${fileName}.json`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return content as T;
};
