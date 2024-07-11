import React, {useContext} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../images/logo.png'

export default function Header() {
    const navigate = useNavigate()
  
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
          <img src={logo} alt="#" className="header__logo" />
          <input type="text" className="header__search" placeholder='Поиск услуг и компаний...'/>
          <span className="header__auth">
            <a href="">Вход</a>
            <span className="header__auth-slash">/</span>
            <a href="">Регистрация</a>
          </span>
        </div>

        <nav className="header__nav">
          <button className="header__nav-button header__nav-button_blue">Скидки</button>
          <button className="header__nav-button header__nav-button_orange">Акции</button>
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
