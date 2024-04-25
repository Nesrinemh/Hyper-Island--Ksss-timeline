import { createClient } from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: 'fr5410kqk9t2',
    accessToken: 'owrrLKwAXtEz_63EKyciABZxVCXteGvN_16qIaN5Jvc',
    host: 'preview.contentful.com',
    // 'cdn.contentful.com' to production
  });

  const getData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'ksssEvent',
        select: 'fields',
        order: 'fields.fullDate',
      });

      const sanitizedEntries = entries.items.map((item) => {
        const eventImages = item.fields.images;

        return {
          ...item.fields,
          eventImages,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  };
  return { getData };
};

export default useContentful;