import WeatherIconSelector from "../../assets/icons/WeatherIconSelector";
import sunset from "../../assets/icons/sunset.svg";
import sunrise from "../../assets/icons/sunrise.svg";
import moonset from "../../assets/icons/moonset.svg";
import moonrise from "../../assets/icons/moonrise.svg"
import uvindex from "../../assets/icons/uv-index.svg"
import './dailyWeather.scss';

const DailyWeather = () => {
    return (
        <section className="daily">
            <div className="container">
                <div className="daily__wrapper">
                    <div className="daily__weather">
                        <div className="daily__weather-item">
                            <div className='daily__weather-descr'>2 сентября</div>
                            <div className='daily__weather-morning'>Утро</div>
                            <div className='daily__weather-day'>День</div>
                            <div className='daily__weather-evening'>Вечер</div>
                            <div className='daily__weather-night'>Ночь</div>
                        </div>
                        <div className="daily__weather-item">
                            <div className='daily__weather-descr'>Температура</div>
                            <div className='daily__weather-morning'>10&deg;C</div>
                            <div className='daily__weather-day'>15&deg;C</div>
                            <div className='daily__weather-evening'>17&deg;C</div>
                            <div className='daily__weather-night'>12&deg;C</div>
                        </div>
                        <div className="daily__weather-item">
                            <div className='daily__weather-descr'>Осадки</div>
                            <div className='daily__weather-morning'>
                                <WeatherIconSelector id='clear sky'/>
                            </div>
                            <div className='daily__weather-day'>
                                <WeatherIconSelector id='clear sky'/>
                            </div>
                            <div className='daily__weather-evening'>
                                <WeatherIconSelector id='clear sky'/>
                            </div>
                            <div className='daily__weather-night'>
                                <WeatherIconSelector id='clear sky'/>
                            </div>
                        </div>
                        <div className="daily__weather-item">
                            <div className='daily__weather-descr'>Давление,<br></br>мм. рт. ст.</div>
                            <div className='daily__weather-morning'>747</div>
                            <div className='daily__weather-day'>751</div>
                            <div className='daily__weather-evening'>753</div>
                            <div className='daily__weather-night'>755</div>
                        </div>
                        <div className="daily__weather-item">
                            <div className='daily__weather-descr'>Влажность</div>
                            <div className='daily__weather-morning'>86%</div>
                            <div className='daily__weather-day'>65%</div>
                            <div className='daily__weather-evening'>62%</div>
                            <div className='daily__weather-night'>80%</div>
                        </div>
                        <div className="daily__weather-item">
                            <div className='daily__weather-descr'>Ветер</div>
                            <div className='daily__weather-morning'>4 м/с</div>
                            <div className='daily__weather-day'>4 м/с</div>
                            <div className='daily__weather-evening'>4 м/с</div>
                            <div className='daily__weather-night'>4 м/с</div>
                        </div>
                        <div className="daily__weather-item">
                            <div className='daily__weather-descr'>Ощущается<br></br>как</div>
                            <div className='daily__weather-morning'>10&deg;C</div>
                            <div className='daily__weather-day'>10&deg;C</div>
                            <div className='daily__weather-evening'>10&deg;C</div>
                            <div className='daily__weather-night'>10&deg;C</div>
                        </div>
                    </div>
                    <div className="daily__daylight">
                        <div className='daily__daylight-item'>
                            <div className='daily__daylight-rise'>
                                <div className='daily__daylight-icon'>  
                                    <img src={sunrise} alt="sunrise" />
                                </div>
                                <p>06:34</p>
                            </div>
                            <div className='daily__daylight-duration'>
                                <p><span>Световой день</span></p>
                                <p>13 ч 44 мин</p>
                            </div>
                            <div className='daily__daylight-set'>
                                <div className='daily__daylight-icon'>
                                    <img src={sunset} alt="sunset"/>
                                </div>
                                <p>06:34</p>
                            </div>
                        </div>
                        <div className='daily__daylight-item'>
                            <div className='daily__daylight-rise'>
                                <div className='daily__daylight-icon'>
                                    <img src={moonrise} alt="moonrise" />
                                </div>
                                <p>06:34</p>
                            </div>
                            <div className='daily__daylight-duration'>
                                <p><span>Световой день</span></p>
                                <p>13 ч 44 мин</p>
                            </div>
                            <div className='daily__daylight-set'>
                                <div className='daily__daylight-icon'>
                                    <img src={moonset} alt="moonset" />
                                </div>
                                <p>06:34</p>
                            </div>
                        </div>
                        <div className="daily__daylight-item">
                            <div className = 'daily__daylight-icon'>
                                <img src={uvindex} alt="uvindex" />
                            </div>
                            <p><span>УФ-индекс</span></p>
                            <p>3, средний</p>
                        </div>
                    </div>
                </div>

            </div>    
        </section>
    );
}
 
export default DailyWeather;