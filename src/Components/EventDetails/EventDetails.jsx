// src/components/EventDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EventDetails = ({ events }) => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={event.imageUrl} alt={event.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
        <p className="text-gray-600">{event.date}</p>
        <p className="mt-4">{event.description}</p>
        <Link to="/" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg">
          Back to Events
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;
