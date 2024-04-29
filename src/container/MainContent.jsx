import MainCard from '../components/main/MainCard';
import useContentful from '../helpers/useContenful';
import { useEffect, useState } from 'react';

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
