/**
 * This test suite tests the `useContentful` hook.
 * The `useContentful` hook creates a Contentful client and provides a function to fetch and sanitize data from Contentful.
 * The `createClient` function from the `contentful` library is mocked to return a client with a `getEntries` function.
 * The `getEntries` function is mocked to return a Promise that resolves to a mock entries object.
 * The test checks if the `getEntries` function is called with the correct parameters and if the `getData` function returns the correct data.
 *
 *
 *
 * @see {@link ../helpers/useContenful.js} for the function that this test suite tests.
 */

import useContentful from '../helpers/useContenful';
import { createClient } from 'contentful';

jest.mock('contentful', () => ({
  createClient: jest.fn(),
}));

describe('useContentful', () => {
  const mockGetEntries = jest.fn();

  beforeAll(() => {
    createClient.mockReturnValue({
      getEntries: mockGetEntries,
    });
  });

  afterEach(() => {
    jest.resetAllMocks(); // Reset mock calls after each test
  });

  it('fetches data from Contentful', async () => {
    const mockEntries = {
      items: [
        {
          fields: {
            title: 'Event 1',
            images: ['image1.jpg', 'image2.jpg'],
            fullDate: '2024-05-01',
            titleEnglish: 'We are together now',
          },
        },
        {
          fields: {
            title: 'Event 2',
            images: ['image3.jpg'],
            fullDate: '2024-05-15',
            titleEnglish: 'We are together now',
          },
        },
      ],
    };

    mockGetEntries.mockResolvedValueOnce(mockEntries);

    const { getData } = useContentful();
    const data = await getData();

    expect(mockGetEntries).toHaveBeenCalledWith({
      content_type: 'ksssEvent',
      select: 'fields',
      order: 'fields.fullDate',
    });

    expect(data).toEqual([
      {
        title: 'Event 1',
        images: ['image1.jpg', 'image2.jpg'],
        fullDate: '2024-05-01',
        eventImages: ['image1.jpg', 'image2.jpg'],
        titleEnglish: 'We are together now',
      },
      {
        title: 'Event 2',
        images: ['image3.jpg'],
        fullDate: '2024-05-15',
        eventImages: ['image3.jpg'],
        titleEnglish: 'We are together now',
      },
    ]);
  });
});
