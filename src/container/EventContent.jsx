import React from 'react';
import { GetSingleDataContext } from '../helpers/useSingleContext';
import EventCard from '../components/main/EventCard';

function EventContent({ item, index }) {
  return <EventCard key={index} item={item} />;
}

export default EventContent;
