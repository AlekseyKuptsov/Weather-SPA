import WeatherIconSelector from '../../assets/icons/WeatherIconSelector';
import Slider from 'react-slick';
import './forecast.scss';

const Forecast = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
    }
    return (
        <section className='forecast'>
            <div className="container">
                <div className="forecast__wrapper">
                    <div className="forecast__buttons">
                        <div className="button">
                            <button>На 7 дней</button>
                        </div>
                        <div className="button">
                            <button>На 10 дней</button>
                        </div>
                        <div className="button">
                            <button>На 16 дней</button>
                        </div>
                    </div>
                    <div className="forecast__cards">
                        <Slider {...settings}>
                            <div className="forecast__cards-item">
                                <div className="forecast__cards-day">Пн</div>
                                <div className="forecast__cards-date">5 сент</div>
                                <div className="forecast__cards-icon"><WeatherIconSelector id='clear sky'/></div>
                                <div className="forecast__cards-maxtemp">18&deg;C</div>
                                <div className="forecast__cards-mintemp">12&deg;C</div>
                                <div className="forecast__cards-precip">Облачно</div>
                            </div>
                            <div className="forecast__cards-item">
                                <div className="forecast__cards-day">Вт</div>
                                <div className="forecast__cards-date">6 сент</div>
                                <div className="forecast__cards-icon"><WeatherIconSelector id='clear sky'/></div>
                                <div className="forecast__cards-maxtemp">18&deg;C</div>
                                <div className="forecast__cards-mintemp">12&deg;C</div>
                                <div className="forecast__cards-precip">Облачно</div>
                            </div>
                            <div className="forecast__cards-item">
                                <div className="forecast__cards-day">Ср</div>
                                <div className="forecast__cards-date">7 сент</div>
                                <div className="forecast__cards-icon"><WeatherIconSelector id='clear sky'/></div>
                                <div className="forecast__cards-maxtemp">18&deg;C</div>
                                <div className="forecast__cards-mintemp">12&deg;C</div>
                                <div className="forecast__cards-precip">Облачно</div>
                            </div>
                            <div className="forecast__cards-item">
                                <div className="forecast__cards-day">Чт</div>
                                <div className="forecast__cards-date">8 сент</div>
                                <div className="forecast__cards-icon"><WeatherIconSelector id='clear sky'/></div>
                                <div className="forecast__cards-maxtemp">18&deg;C</div>
                                <div className="forecast__cards-mintemp">12&deg;C</div>
                                <div className="forecast__cards-precip">Облачно</div>
                            </div>
                            <div className="forecast__cards-item">
                                <div className="forecast__cards-day">Пт</div>
                                <div className="forecast__cards-date">9 сент</div>
                                <div className="forecast__cards-icon"><WeatherIconSelector id='clear sky'/></div>
                                <div className="forecast__cards-maxtemp">18&deg;C</div>
                                <div className="forecast__cards-mintemp">12&deg;C</div>
                                <div className="forecast__cards-precip">Облачно</div>
                            </div>
                            <div className="forecast__cards-item">
                                <div className="forecast__cards-day">Сб</div>
                                <div className="forecast__cards-date">10 сент</div>
                                <div className="forecast__cards-icon"><WeatherIconSelector id='clear sky'/></div>
                                <div className="forecast__cards-maxtemp">18&deg;C</div>
                                <div className="forecast__cards-mintemp">12&deg;C</div>
                                <div className="forecast__cards-precip">Облачно</div>
                            </div>
                            <div className="forecast__cards-item">
                                <div className="forecast__cards-day">Вс</div>
                                <div className="forecast__cards-date">11 сент</div>
                                <div className="forecast__cards-icon"><WeatherIconSelector id='clear sky'/></div>
                                <div className="forecast__cards-maxtemp">18&deg;C</div>
                                <div className="forecast__cards-mintemp">12&deg;C</div>
                                <div className="forecast__cards-precip">Облачно</div>
                            </div>
                            <div className="forecast__cards-item">
                                <div className="forecast__cards-day">Пн</div>
                                <div className="forecast__cards-date">12 сент</div>
                                <div className="forecast__cards-icon"><WeatherIconSelector id='clear sky'/></div>
                                <div className="forecast__cards-maxtemp">18&deg;C</div>
                                <div className="forecast__cards-mintemp">12&deg;C</div>
                                <div className="forecast__cards-precip">Облачно</div>
                            </div>
                            <div className="forecast__cards-item">
                                <div className="forecast__cards-day">Вт</div>
                                <div className="forecast__cards-date">13 сент</div>
                                <div className="forecast__cards-icon"><WeatherIconSelector id='clear sky'/></div>
                                <div className="forecast__cards-maxtemp">18&deg;C</div>
                                <div className="forecast__cards-mintemp">12&deg;C</div>
                                <div className="forecast__cards-precip">Облачно</div>
                            </div>
                            <div className="forecast__cards-item">
                                <div className="forecast__cards-day">Ср</div>
                                <div className="forecast__cards-date">14 сент</div>
                                <div className="forecast__cards-icon"><WeatherIconSelector id='clear sky'/></div>
                                <div className="forecast__cards-maxtemp">18&deg;C</div>
                                <div className="forecast__cards-mintemp">12&deg;C</div>
                                <div className="forecast__cards-precip">Облачно</div>
                            </div>
                        </Slider>

                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Forecast;