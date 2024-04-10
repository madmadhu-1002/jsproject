import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Event.css';
 // Import the CSS file

const Event = ({ imageUrl, event_name, distanceKm, temperature, location, date}) => {
  return (
    <div className="event-card1">
      <div className="image-container1">
        <img src={imageUrl} alt="Event" className="event-image1" />
        <div className="image-details1">
          <h6 className="date1">{date}</h6>
        </div>
      </div>
      <h4 className="event-name1">{event_name}</h4>
      <h6 className="location1"><FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />  {location}</h6> 
      <h6 className="distance1">{temperature} | {distanceKm} km</h6>
    </div>
  );
};

export default Event;
