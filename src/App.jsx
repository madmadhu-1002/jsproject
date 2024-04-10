import { useState } from 'react'

import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Recommendedshows from './RecommendedShows'
import EventsList from './EventsList'
import NavBar from './NavBar';

function App() {
  

  return (
    <>
    <div className='total'>
    <NavBar />
    <img src='Banner.svg' className='main-image' alt='imaeg'/>
    <div className='events-total'>
    
    <Recommendedshows />
    <h3 className='upcoming-events'>Upcoming Events <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></h3>
    <EventsList />
    </div>
    
    </div>
    </>
  )
}

export default App
