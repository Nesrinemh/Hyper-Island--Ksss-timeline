import useContentful from '../helpers/useContenful';
import { createClient } from 'contentful';

// Mocking the contentful module
jest.mock('contentful', () => ({
  createClient: jest.fn(),
}));

describe('useContentful', () => {
  const mockGetEntries = jest.fn(); // Mock function for getEntries

  beforeAll(() => {
    // Mock createClient to return an object with getEntries method
    createClient.mockReturnValue({
      getEntries: mockGetEntries,
    });
  });

  afterEach(() => {
    jest.resetAllMocks(); // Reset mock calls after each test
  });

  it('fetches data from Contentful', async () => {
    // Mocked entries response
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

    // Mock getEntries to resolve with mockEntries
    mockGetEntries.mockResolvedValueOnce(mockEntries);

    const { getData } = useContentful();

    // Call the getData function
    const data = await getData();
    // Assert that the client was called with the correct parameters
    expect(mockGetEntries).toHaveBeenCalledWith({
      content_type: 'ksssEvent',
      select: 'fields',
      order: 'fields.fullDate',
    });

    // Assert that the returned data is transformed correctly
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
