import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import logoHeader from '../../images/logoHeader.svg'
import lupa from '../../images/lupa.svg'
export default function Header() {
  const navigate = useNavigate()
  const [activeButton, setActiveButton] = useState('discounts');

  const handleButtonClick = (route, buttonId) => {
    navigate(route, { replace: false });
    setActiveButton(buttonId);
  };

  return (
    <header className="header">
      <div className='container'>
        <div className='header__firstLine'>
          <a className='header__location' href="">Полоцк</a>
          <div className="header__about">
            <a href="">Для вашего бизнеса</a>
            <a href="">Пригласить друга</a>
            <a href="">О приложении</a>
            <a href="">Франшиза</a>
          </div>
          <a href="tel:">+375 (33) 111-11-11</a>
        </div>

        <div className='header__secondLine'>
          <img src={logoHeader} alt="#" className="header__logo" />
          <form action="" className="header__search-box">
            <input type="text" className="header__search" placeholder='Поиск услуг и компаний...'/>
            <div className='header__search-iconBox'>
              <img className='header__search-icon' src={lupa} alt="#" />
            </div>
          </form>
          <span className="header__auth">
            <a href="">Вход</a>
            <span className="header__auth-slash">/</span>
            <a href="">Регистрация</a>
          </span>
        </div>

        <nav className="header__nav">
          <button
            className={`header__nav-button header__nav-button_blue ${activeButton === 'discounts' ? 'header__nav-button_blue_active' : ''}`}
            onClick={() => handleButtonClick('discounts', 'discounts')}
            >
            Скидки
          </button>
          <button 
            className={`header__nav-button header__nav-button_orange ${activeButton === 'stock' ? 'header__nav-button_orange_active' : ''}`}
            onClick={() => handleButtonClick('stock', 'stock')}
            >
            Акции
          </button>
          <button className="header__nav-button">Развлечения</button>
          <button className="header__nav-button">Красота</button>
          <button className="header__nav-button">Еда</button>
          <button className="header__nav-button">Здоровье</button>
          <button className="header__nav-button">Дети</button>
          <button className="header__nav-button">Спорт</button>
          <button className="header__nav-button">Обучение</button>
          <button className="header__nav-button">Авто</button>
        </nav>
      </div>
    </header>
  )
}
