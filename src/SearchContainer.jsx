import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchContainer.css'; // Import the CSS file for styling

const SearchContainer = () => {
  return (
    <div className="search-container">
    <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input type="text" className="search-input" placeholder="DJI phantom" />
      
    </div>
  );
};

export default SearchContainer;
