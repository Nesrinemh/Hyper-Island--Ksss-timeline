import { createClient } from 'contentful';

/**
 * `useContentful` is a hook that creates a Contentful client and provides a function to fetch and sanitize data from Contentful.
 * The client is configured with a space ID, an access token, and a host.
 * The `getData` function fetches data of the 'ksssEvent' content type, selects the 'fields' of each entry, and orders the entries by 'fullDate'.
 * Each entry is sanitized into a new object that includes the entry's fields, images, and ID.
 *
 * // The hook can be used like this:
 * const { getData } = useContentful();
 * const data = await getData();
 *
 * @returns {Object} An object with the `getData` function.
 */

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
