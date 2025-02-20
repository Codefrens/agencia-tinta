//Este es el fetcher de Contentful

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
