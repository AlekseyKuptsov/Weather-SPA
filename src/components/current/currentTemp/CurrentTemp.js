import WeatherIconSelector from "../../../assets/icons/WeatherIconSelector";

const CurrentTemp = ({temp, id, descr, city}) => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let fMonth;

    switch(month) {
          case 0: fMonth = "января"; break;
          case 1: fMonth = "февраля"; break;
          case 2: fMonth = "марта"; break;
          case 3: fMonth = "апреля"; break;
          case 4: fMonth = "мае"; break;
          case 5: fMonth = "июня"; break;
          case 6: fMonth = "июля"; break;
          case 7: fMonth = "августа"; break;
          case 8: fMonth = "сентября"; break;
          case 9: fMonth = "октября"; break;
          case 10: fMonth = "ноября"; break;
          case 11: fMonth = "декабря"; break;
    }

    return (
        <>
            <div className="current__temp-item" >
                <div className="current__temp-descr">
                    <div className="current__temp-value">{temp}&deg;C</div>
                    <div className="current__temp-date">
                        <p className="current__temp-date">{day} {fMonth}</p>
                        <p className="current__temp-date">Сегодня</p>
                    </div>  
                </div>
                <div className="current__temp-icon">
                    <WeatherIconSelector id={id}/>
                    <p className="current__temp-precip">{descr}</p>
                </div>
            </div>
            <p>Время: {hours}:{minutes}</p>
            <p>Город: {city}</p>
        </>
    );
}
 
export default CurrentTemp;