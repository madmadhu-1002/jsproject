/*const events = [
    {
      eventName: 'DJ Night 1',
      imgUrl: 'https://drive.google.com/uc?export=view&id=1lS1XAo47YvNSoFp1NE5rmhTSQ8qNBWEh ',
      distanceKm: '10',
      weather: '25°C',
      cityName: 'Hyderabad',
      date: 'April 01 2024',
    },
    {
      eventName: 'Music Festival 1',
      imgUrl: '../public/event1.jpg',
      distanceKm: '15',
      weather: '30°C',
      cityName: 'Bangalore',
      date: 'April 15 2024',
    },
    {
      eventName: 'DJ Night 2',
      imgUrl: '../public/dj.jpeg',
      distanceKm: '8',
      weather: '26°C',
      cityName: 'Mumbai',
      date: 'April 02 2024',
    },
    {
      eventName: 'Music Festival 2',
      imgUrl: '../public/event1.jpg',
      distanceKm: '12',
      weather: '28°C',
      cityName: 'Delhi',
      date: 'April 16 2024',
    },
    {
      eventName: 'DJ Night 3',
      imgUrl: '../public/dj.jpeg',
      distanceKm: '9',
      weather: '24°C',
      cityName: 'Chennai',
      date: 'April 03 2024',
    },
    {
      eventName: 'Music Festival 3',
      imgUrl: '../public/event1.jpg',
      distanceKm: '17',
      weather: '31°C',
      cityName: 'Kolkata',
      date: 'April 17 2024',
    },
    {
      eventName: 'DJ Night 4',
      imgUrl: '../public/dj.jpeg',
      distanceKm: '11',
      weather: '27°C',
      cityName: 'Pune',
      date: 'April 04 2024',
    },
    {
      eventName: 'Music Festival 4',
      imgUrl: '../public/event1.jpg',
      distanceKm: '14',
      weather: '29°C',
      cityName: 'Ahmedabad',
      date: 'April 18 2024',
    },
    {
      eventName: 'DJ Night 5',
      imgUrl: '../public/dj.jpeg',
      distanceKm: '13',
      weather: '26°C',
      cityName: 'Jaipur',
      date: 'April 05 2024',
    },
    {
      eventName: 'Music Festival 5',
      imgUrl: '../public/event1.jpg',
      distanceKm: '16',
      weather: '30°C',
      cityName: 'Lucknow',
      date: 'April 19 2024',
    },
  ];
  
  export default events;


import axios from 'axios';

// Define an async function to fetch events from the API
const fetchEventsData = async () => {
  try {
    const response = await axios.get(
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco'
    );
    const eventsData = response.data; // Store the JSON data in eventsData variable
    return eventsData.events; // Return the data
  } catch (error) {
    console.error('Error fetching events data:', error);
    return null; // Return null in case of an error
  }
};

// Call the fetchEventsData function and store the returned data in events variable
const events = await fetchEventsData();

// Now you can use the events variable to access the fetched JSON data
console.log(events); // Print the events data to the console
export default events;*/