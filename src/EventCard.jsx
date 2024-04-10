import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './EventCard.css'; // Import the CSS file

const EventCard = ({ imageUrl, event_name, distanceKm, temperature, location, date }) => {
  
  return (
    <div className="event-card">
      
        <img src={imageUrl} alt={imageUrl} className="event-image" />
        
        <div className="image-details">
          <h5 className="event-name">{event_name}</h5>
          <h6 className="location"><FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />  {location}</h6> 
          <h6 className="distance">{temperature} | {distanceKm} km</h6>
          <h6 className="date">{date}</h6>
          
        </div>
    
    </div>
  );
};

export default EventCard;
