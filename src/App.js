import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import Credit from './components/Credit';
import SearchResult from './components/SearchResult';
import ProfileAccount from './views/ProfileAccount';
import ProfileSearch from './views/ProfileSearch';
import ProfileSingleSearch from './views/ProfileSingleSearch';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';

export default function App() {

  // const [data, setData] = useState({})
  // const [location, setLocation] = useState('')
  
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=50c9f2b64591b303b60ec53b1d13e1dd`
  

  // const searchLocation = (event) => {
  //   if (event.key === 'Enter') {
  //     axios.get(url).then((response) => {
  //       setData(response.data)
  //       console.log(response.data)
  //     })
  //     setLocation('')
  //   }
  // }
  
  return (
    <div className="app">
      <div className="container">
        <h1>Weather Application</h1>
        <div className="top">
          <div className="search">
            <input type="text" value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="Location" />
          </div>
        </div>

        {/* {data.name != undefined &&
          <div className="bottom">
            <div className="location">
              <h1>{data.name}</h1>
            </div>
            <div className="high">
              <h2>High</h2>
              {data.main ? <p>{data.main.temp_max.toFixed()}°F</p> : null}
            </div>
            <div className="low">
              <h2>Low</h2>
              {data.main ? <p>{data.main.temp_min.toFixed()}°F</p> : null}
            </div>
            <div className="forecast">
              <h2>Forecast</h2>
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
            <div className="humidity">
              <h2>Humidity</h2>
              {data.main ? <p>{data.main.humidity}</p> : null}
            </div>
          </div>
        }  */}
      </div>
    </div>
  );
}

// export default App;
