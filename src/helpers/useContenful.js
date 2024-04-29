import { createClient } from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: 'fr5410kqk9t2',
    accessToken: 'owrrLKwAXtEz_63EKyciABZxVCXteGvN_16qIaN5Jvc',
    host: 'preview.contentful.com',
    // 'cdn.contentful.com' to production
  });

  // get data from contentful
  const getData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'ksssEvent',
        select: 'fields',
        order: 'fields.fullDate',
      });

      // sanitize data
      const sanitizedEntries = entries.items.map((item) => {
        const eventImages = item.fields.images;
        const eventId = item.sys.id;
        return {
          ...item.fields,
          eventImages,
          eventId,
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
