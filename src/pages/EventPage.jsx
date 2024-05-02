import { useState } from 'react';
import EventCard from '../components/main/EventCard';
import Navbar from '../components/header/Navbar';
import BackBar from '../components/header/BackBar';
import { useParams } from 'react-router-dom';

/**
 * `EventPage` is a functional component that renders an event page.
 * The page includes a navigation bar, a back bar with the event year, and an event card.
 * The event ID is obtained from the URL parameters using the `useParams` hook.
 * The `EventCard` component fetches the event data and sets the `data` state.
 *
 * // The component can be used like this:
 * <EventPage />
 *
 * @returns {React.Element} The rendered React element.
 */

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
