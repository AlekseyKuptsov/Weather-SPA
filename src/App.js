import React from 'react';
import WeatherService from './services/WeatherService';
import Header from './components/header/Header';
import Current from './components/current/Current';
import DailyWeather from './components/dailyWeather/DailyWeather';
import Forecast from './components/forecast/Forecast';
import './App.css';

const App = () => {
  const getCurrentWeather = WeatherService();

  React.useEffect(() => {
    getCurrentWeather();
  }, [])

  return (
    <div className="App">
      <Header/>
      <Current/>
      <DailyWeather/>
      <Forecast/>
    </div>
  );
}

export default App;
