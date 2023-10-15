// src/components/EventCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
        <p className="text-gray-600">{event.date}</p>
        <Link to={`/event/${event.id}`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg">
          Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
