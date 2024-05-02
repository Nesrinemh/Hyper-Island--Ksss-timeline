import MainCard from '../components/main/MainCard';
import useContentful from '../helpers/useContenful';
import { useEffect, useState } from 'react';

/**
 * `MainContent` is a functional component that fetches event data from Contentful and renders a `MainCard` for each event.
 * The event data is fetched using the `useContentful` hook and sorted by year in descending order.
 * Each `MainCard` is passed an event item as a prop.
 *
 *
 * // The component can be used like this:
 * <MainContent />
 *
 * @returns {React.Element[]} An array of `MainCard` elements, each representing an event.
 */

function MainContent() {
  const [event, setEvent] = useState([]);
  const { getData } = useContentful();

  // get data from contentful
  useEffect(() => {
    getData().then((response) => {
      const sortedEvents = response.sort((a, b) => b.year - a.year);
      setEvent(sortedEvents);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // map to return all events
  return event.map((item, index) => {
    return <MainCard key={index} item={item} />;
  });
}

export default MainContent;
