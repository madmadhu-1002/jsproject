import React, { useState } from 'react';
import './CategoryList.css'; // Import the CSS file for styling

const CategoryList = () => {
  const [showList, setShowList] = useState(false); // State to manage list visibility

  const handleButtonClick = () => {
    setShowList(!showList); // Toggle list visibility on button click
  };

  return (
    <div className="category-container">
      <button onClick={handleButtonClick} className="category-button">
        Categories
      </button>
      {showList && (
        <ul className="category-list">
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          {/* Add more categories as needed */}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;
