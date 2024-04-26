import EventCard from '../components/main/EventCard';
import Navbar from '../components/header/Navbar';
import BackBar from '../components/header/BackBar';
// import { GetSingleDataContext } from '../helpers/useSingleContext';
// import { useContext } from 'react';
import { useParams } from 'react-router-dom';

function EventPage() {
  const { id } = useParams();
  // const { singleData, fetchData } = useContext(GetSingleDataContext);

  return (
    <div>
      <Navbar />
      <BackBar />
      <EventCard eventID={id} />
    </div>
  );
}

export default EventPage;
