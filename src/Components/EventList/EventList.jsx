import React from 'react';
// import EventCard from './EventCard';
import EventCard from '../EventCard/EventCard';
// import { events } from '../data';
import { events } from '../../data';

const EventList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
