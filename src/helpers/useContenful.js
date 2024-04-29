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

      const sanitizedEntries = entries?.items.map((item) => {
        const fields = item?.fields; // Access the 'fields' property of each item
        const eventImages = fields?.images; // Access the 'images' property of 'fields'
        const eventId = item?.sys?.id;
        return {
          ...fields, // Spread the 'fields' object
          eventImages,
          eventId,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      return [];
    }
  };

  return { getData };
};

export default useContentful;
