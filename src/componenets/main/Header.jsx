import React, {useState} from 'react'
import logoHeader from '../../images/other/logoHeader.svg'
import lupa from '../../images/icons/lupa.svg'
import { useAuth } from '../../hooks/useAuth';
export default function Header({handleButtonClick, activeButton}) {
  const {logout} = useAuth()


  return (
    <header className="header">
      <div className='container'>
        <div className='header__firstLine'>
          <a className='header__location' href="">Полоцк</a>
          <div className="header__about">
            <a onClick={() => handleButtonClick('partnership', 'partnership')}>Для вашего бизнеса</a>
            <a href="">Пригласить друга</a>
            <a onClick={() => handleButtonClick('aboutapp', 'aboutapp')}>О приложении</a>
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
          <span className="header__auth" onClick={() => logout()}>
            <a >Вход</a>
            <span className="header__auth-slash">/</span>
            <a >Регистрация</a>
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
          <button 
            className={`header__nav-button header__nav-button_red ${activeButton === 'services' ? 'header__nav-button_red_active' : ''}`}
            onClick={() => handleButtonClick('services', 'services')}
            >
            Услуги
          </button>

          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'entertainment' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleButtonClick('entertainment', 'entertainment')}
            >
            Развлечения
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'beauty' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleButtonClick('beauty', 'beauty')}
            >
            Красота
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'food' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleButtonClick('food', 'food')}
            >
            Еда
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'health' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleButtonClick('health', 'health')}
            >
            Здоровье
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'children' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleButtonClick('children', 'children')}
            >
            Дети
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'sport' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleButtonClick('sport', 'sport')}
            >
            Спорт
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'education' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleButtonClick('education', 'education')}
            >
            Обучение
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'auto' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleButtonClick('auto', 'auto')}
            >
            Авто
          </button>
        </nav>
      </div>
    </header>
  )
}
