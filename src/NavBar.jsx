import React from 'react'
import CategoryList from './CategoryList'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt , faHeart, faSearch , faUser } from '@fortawesome/free-solid-svg-icons';

import SearchContainer from './SearchContainer';

const NavBar = () => {
  return (
    <>
    <div className='nav-bar'>
        <h2 className='book-us-now'>BookUsNow</h2>
        <h4 className='lc2'><FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
 Mumbai,India<span className="location-direction">&#62;</span></h4>
        <h3 className='icons'><FontAwesomeIcon icon={faHeart} className="item" /><FontAwesomeIcon icon={faSearch} className='item'/><FontAwesomeIcon icon={faUser} className='item'/></h3>
        <h6 className='lc'><FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
 Mumbai, India <span className="location-direction">&#62;</span></h6>
      
        <CategoryList />
        <SearchContainer />
        <h4 className='favorites'><FontAwesomeIcon icon={faHeart} className="love-icon" />Favorites</h4>
        <button className='sign-in'>Sign in</button>
        
    </div>
    <div className='nav-bar2'>
        <h6 className='lc1'><FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
 Mumbai, India <span className="location-direction">&#62;</span></h6>
        <h4>Live shows</h4>
        <h4>Streams</h4>
        <h4>Movies</h4>
        <h4>Plays</h4>
        <h4>Events</h4>
        <h4>Sports</h4>
        <h4>Activities</h4>
    </div>
    </>
  )
}

export default NavBar