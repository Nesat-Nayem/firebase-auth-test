import React from 'react';
import { useHistory } from "react-router-dom";

function ServiceCard({ service }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/details/${service.id}`);
  };

  return (
    <div onClick={handleClick} className="w-full md:w-1/3 p-2">
      <div className="card bordered">
        <figure>
          <img src={service.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.name}</h2> 
          <p>{service.description}</p> 
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;
