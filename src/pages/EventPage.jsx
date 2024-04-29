import { useState } from 'react';
import EventCard from '../components/main/EventCard';
import Navbar from '../components/header/Navbar';
import BackBar from '../components/header/BackBar';
import { useParams } from 'react-router-dom';

function EventPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  return (
    <div>
      <Navbar />
      {data && <BackBar eventYear={data.fields.year} />}
      <EventCard eventID={id} setData={setData} />
    </div>
  );
}

export default EventPage;
