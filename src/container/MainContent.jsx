import MainCard from '../components/main/MainCard';
import useContentful from '../helpers/useContenful';
import { useEffect, useState } from 'react';

function MainContent() {
  const [event, setEvent] = useState([]);
  const { getData } = useContentful();

  useEffect(() => {
    getData().then((response) => {
      const sortedEvents = response.sort((a, b) => b.year - a.year);
      setEvent(sortedEvents);
    });
  }, []);

  return event.map((item, index) => {
    return <MainCard key={index} item={item} />;
  });
}

export default MainContent;