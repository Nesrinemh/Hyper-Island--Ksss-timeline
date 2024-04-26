import EventCard from '../components/main/EventCard';
import Navbar from '../components/header/Navbar';
import BackBar from '../components/header/BackBar';

function EventPage() {
  return (
    <div>
      <Navbar />
      <BackBar />
      <EventCard />
    </div>
  );
}

export default EventPage;
