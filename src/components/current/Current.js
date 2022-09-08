import { useState } from "react";
import { useSelector } from "react-redux";
import CurrentTemp from "./currentTemp/CurrentTemp";
import WeatherIconSelector from "../../assets/icons/WeatherIconSelector";
import CurrentIconSelector from "../../assets/icons/CurretIconSelector";
import './current.scss';

const Current = () => {
    const currentWeather = useSelector(state => state.currentWeather);
    const currentWeatherLoadingStatus = useSelector(state => state.currentWeather.currentWeatherLoadingStatus);
    const [temp, setTemp] = useState('');

    // if (currentWeatherLoadingStatus === "loading") {
    //     setTemp('N/A')
    // } else if (currentWeatherLoadingStatus === "error") {
    //     console.log('error')
    // } else if (currentWeatherLoadingStatus === "loaded") {
    //     setTemp(currentWeather.currentConditions.temp);

    return (
        <section className="current">
            <div className="container">
                <div className="current__wrapper">
                    <div className="current__temp">
                        <CurrentTemp
                            temp={15}
                            id={'clear sky'}
                            descr={'clear sky'}
                            city={'Новосибирск'}/>
                    </div>
                    <div className="current__info">
                        <div className="current__info-item">
                            <div className="current__info-icon">
                                <CurrentIconSelector id='temperature'/>
                            </div>
                            <div className="current__info-descr">Температура</div>
                            <div className="current__info-value">20&deg; - ощущается как 17&deg;</div>                        
                        </div>
                        <div className="current__info-item">
                            <div className="current__info-icon">
                                <CurrentIconSelector id ='preasure'/>
                            </div>
                            <div className="current__info-descr">Давление</div>
                            <div className="current__info-value">765 мм ртутного столба - нормальное</div>
                        </div>
                        <div className="current__info-item">
                            <div className="current__info-icon">
                                <CurrentIconSelector id='humidity'/>
                            </div>
                            <div className="current__info-descr">Влажность</div>
                            <div className="current__precipitation-value">65%</div>
                        </div>
                        <div className="current__info-item">
                            <div className="current__info-icon">
                                <CurrentIconSelector id='wind'/>
                            </div>
                            <div className="current__info-descr">Ветер</div>
                            <div className="current__info-value">3 м/с юго-запад - легкий ветер</div>
                        </div>
                    </div>                     
                </div> 
            </div>
        </section>
    );
}
 
export default Current;
