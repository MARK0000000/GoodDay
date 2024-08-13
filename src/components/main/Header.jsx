import React, {useContext, useRef, useState} from 'react'
import logoHeader from '../../images/other/logoHeader.svg'
import lupa from '../../images/icons/lupa.svg'
import { useAuth } from '../../hooks/useAuth';
import { SearchContext } from '../../context/Search';
import { NavigateContext } from '../../context/Navigate';
export default function Header() {
  const {logout} = useAuth()
  const {setSearchValue} = useContext(SearchContext)
  const {handleNavigate, activeButton} = useContext(NavigateContext)
  const searchInput = useRef()

  const [moreButtonsActive, setMoreButtonsActive] = useState(false)

  const changeMoreButtonsActive = () => {
    if (moreButtonsActive == true) {
      setMoreButtonsActive(false)
    } else {
      setMoreButtonsActive(true)
    }
  }

  function handleSearch(event) {
    event.preventDefault()

    let value = searchInput.current.value

    setSearchValue(value)

  }
  return (
    <header className="header">
      <div className='container'>
        <div className='header__firstLine'>
          <a className='header__location' href="">Полоцк</a>
          <div className="header__about">
            <a onClick={() => handleNavigate('partnership', 'partnership')}>Для вашего бизнеса</a>
            <a href="">Пригласить друга</a>
            <a onClick={() => handleNavigate('aboutapp', 'aboutapp')}>О приложении</a>
            <a href="">Франшиза</a>
          </div>
          <a href="tel:">+375 (33) 111-11-11</a>
        </div>

        <div className='header__secondLine'>
          <img src={logoHeader} alt="#" className="header__logo" />
          <form action="" className="header__search-box" onSubmit={handleSearch}>
            <input ref={searchInput} type="text" className="header__search" placeholder='Поиск услуг и компаний...'/>
            <div className='header__search-iconBox'>
              <button>
                <img className='header__search-icon' src={lupa} alt="#" />
              </button>
            </div>
          </form>
          <span className="header__auth" onClick={() => logout()}>
            <a >Вход</a>
            <span className="header__auth-slash">/</span>
            <a >Регистрация</a>
          </span>
        </div>

        <nav className="header__nav">
          <div className="header__navCore">
          <button
            className={`header__nav-button header__nav-button_blue ${activeButton === 'discounts' ? 'header__nav-button_blue_active' : ''}`}
            onClick={() => handleNavigate('discounts', 'discounts')}
            >
            Скидки
          </button>
          <button 
            className={`header__nav-button header__nav-button_orange ${activeButton === 'stock' ? 'header__nav-button_orange_active' : ''}`}
            onClick={() => handleNavigate('stock', 'stock')}
            >
            Акции
          </button>
          <button 
            className={`header__nav-button header__nav-button_red ${activeButton === 'services' ? 'header__nav-button_red_active' : ''}`}
            onClick={() => handleNavigate('services', 'services')}
            >
            Услуги
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'entertainment' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('entertainment', 'entertainment')}
            >
            Развлечения
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'beauty' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('beauty', 'beauty')}
            >
            Красота
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'food' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('food', 'food')}
            >
            Еда
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'health' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('health', 'health')}
            >
            Здоровье
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'children' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('children', 'children')}
            >
            Дети
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'sport' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('sport', 'sport')}
            >
            Спорт
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'education' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('education', 'education')}
            >
            Обучение
          </button>
          <button 
              className={`header__nav-button header__nav-button_gray ${activeButton === 'auto' ? 'header__nav-button_gray_active' : ''}`}
              onClick={() => handleNavigate('auto', 'auto')}
              >
              Авто
          </button>
          <button 
            className={`header__nav-buttonMore header__nav-button_gray ${moreButtonsActive ? 'header__nav-buttonMore_active' : ''}`}
            onClick={changeMoreButtonsActive}
            >
            Ещё
          </button>
          </div>
          <div className={`header__navMore ${moreButtonsActive && 'header__navMore_active'}`}>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'recreation' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('recreation', 'recreation')}
            >
            Отдых
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'accessories' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('accessories', 'accessories')}
            >
            Аксессуары
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'gifts' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('gifts', 'gifts')}
            >
            Подарки
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'clothesandshoes' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('clothesandshoes', 'clothesandshoe')}
            >
            Одежда и обувь
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'equipment' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('equipment', 'equipment')}
            >
            Техника
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'evetythingforhome' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('evetythingforhome', 'evetythingforhome')}
            >
            Всё для дома
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'masterclasses' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('masterclasses', 'masterclasses')}
            >
            Мастер классы
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'pets' ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => handleNavigate('pets', 'pets')}
            >
            Животные
          </button>
          <button 
              className={`header__nav-button header__nav-button_gray ${activeButton === 'repair' ? 'header__nav-button_gray_active' : ''}`}
              onClick={() => handleNavigate('repair', 'repair')}
              >
              Ремонт
          </button>
          <button 
              className={`header__nav-button header__nav-button_gray ${activeButton === 'other' ? 'header__nav-button_gray_active' : ''}`}
              onClick={() => handleNavigate('other', 'other')}
              >
              Прочее
          </button>

          </div>
        </nav>
      </div>
    </header>
  )
}
