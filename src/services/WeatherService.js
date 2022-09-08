import { fetchCurrentWeather } from "../slices/CurrentWeatherSlice";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

const WeatherService = () => {
    const dispatch = useDispatch();
    const _apiBase = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
    const _apiKey = 'key=A5ZWZGJ8WH4KE52PR7VZP22GX';
    const city = 'Novosibirsk';

    const getCurrentWeather = useCallback(() => dispatch(fetchCurrentWeather([_apiBase, city , _apiKey])), [dispatch, city]);

    return getCurrentWeather;
}
 
export default WeatherService;