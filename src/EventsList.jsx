import React, { useState, useEffect } from 'react';

import Event from './Event'; // Assuming Event component is in the same directory
import './EventsList.css'; // Import the CSS file for the parent component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  const extractFileId = (url) => {
    // Use a regular expression to match the file ID part in the URL
    const match = url.match(/\/file\/d\/([^/]+)\//);
  
    // Check if the match was successful
    if (match) {
      // Return the captured file ID (the first captured group)
      const fileId = match[1];
      return `https://drive.google.com/thumbnail?id=${fileId}`;
    }
  
    // If the pattern is not found, return null
    return null;
  };
  const formatDistance = (num) => {
    // Convert the string to a number
    const numAsNumber = parseFloat(num);
  
    // Check if the conversion was successful
    if (isNaN(numAsNumber)) {
      // Handle invalid input
      console.error('Invalid input: not a number');
      return null;
    }
  
    // Round the number to 2 decimal places
    const roundedNumber = Number(numAsNumber.toFixed(2));
    
    // Divide by 100 and round down to the nearest integer
    const formattedDistance = Math.floor(roundedNumber / 100);
  
    return formattedDistance;
  };

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${currentPage}&type=upcoming`
      );
      console.log(currentPage);
      const data = await response.json();
      console.log(data); // Log the entire response to understand its structure
      if (data.events && data.events.length > 0) {
        setEvents((prevEvents) => [...prevEvents, ...data.events]);
        setCurrentPage((prevPage) => prevPage + 1);
        setHasMorePages(data.page < data.totalPages);
      } else {
        setHasMorePages(false);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchEvents();
  }, []);
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    console.log(e.target.scrollHeight+""+e.target.scrollTop+""+e.target.clientHeight)
    
    if (bottom && !loading && hasMorePages){
      fetchEvents();
      console.log(events);
    }
  };
  
 
  return (
    <div className="events-container" onScroll={handleScroll}>
      {events.map((event, index) => (
        
        <Event
          key={index}
          imageUrl={extractFileId(event.imgUrl)}
          event_name={event.eventName}
          distanceKm={formatDistance(event.distanceKm)}
          temperature={event.weather}
          location={event.cityName}
          date={formatDate(event.date)}
        />
      ))}
      
    </div>
  );
};

export default EventsList;
