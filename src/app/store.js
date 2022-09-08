import { configureStore } from '@reduxjs/toolkit';
import currentWeather from '../slices/CurrentWeatherSlice'

const store = configureStore({
  reducer: {
    currentWeather: currentWeather
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
