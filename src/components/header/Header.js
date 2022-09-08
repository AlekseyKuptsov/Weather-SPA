import HeaderIconSelector from "../../assets/icons/HeaderIconSelector";
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__item">
                        <div className="header__logo">
                            <HeaderIconSelector id='header_logo'/>
                        </div>
                        <div className="header__title">React Weather App</div>
                    </div>
                    <div className="header__item">
                        <div className="header__theme">
                            <HeaderIconSelector id = 'theme'/>
                        </div>
                        <div className="header__cities">
                            <select name="city" id="city">
                                <option value="">Выбрать город</option>
                                <option value="">Нововсибирск</option>
                                <option value="">Москва</option>
                                <option value="">Санкт-Петербург</option>
                            </select>
                        </div>
                    </div>   
                </div>

            </div>
        </header>
    );
}
 
export default Header;