import React, {useContext, useEffect, useRef, useState} from 'react'
import logoHeader from '../../images/other/logoHeader.svg'
import { useLocation } from 'react-router-dom';
import lupa from '../../images/icons/lupa.svg'
import { useAuth } from '../../hooks/useAuth';
import { SearchContext } from '../../context/Search';
import { NavigateContext } from '../../context/Navigate';
import iconMenu from '../../images/icons/icon_menu.svg';
import closeIcon from '../../images/icons/close.svg';
import { CityContext } from '../../context/City';
import LoadingSpinner from '../UI/loaders/LoaderSpinner';
import crossIcon from '../../images/icons/cross.svg'
import { getEndpoint } from '../../utils/workWithUrl';
export default function Header() {
  const location = useLocation();
  const endpoint = getEndpoint(location);
  const {logout} = useAuth()
  const {setSearchValue, isSearchLoading, searchValue, getCategoryId} = useContext(SearchContext)
  const {city, updateCity} = useContext(CityContext)
  const {handleNavigate, activeButton} = useContext(NavigateContext)
  const searchInput = useRef()

  const [moreButtonsActive, setMoreButtonsActive] = useState(false)
  const [burgerActive, setBurgerActive] = useState(false)

  useEffect(() => {
    if (endpoint == 'promotions' || endpoint == 'discounts' || endpoint == 'services' || (endpoint in getCategoryId)) {
      setSearchValue(searchInput.current.value)
    }
  }, [endpoint])
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
  const handleUpdateCity = () => {
    if (city == 1) {
      updateCity(2)
    } else {
      updateCity(1)
    }
  }
  const handleClearSearch = () => {
    searchInput.current.value = ''; // Обнуляем значение input
    setSearchValue(''); // Обнуляем значение в контексте
  };
  // const handleSearchBlur = () => {
  //   let value = searchInput.current.value;
  //   setSearchValue(value);
  // };
  
  return (
    <header className="header">
      <div className='container header__container'>
        <div className='header__firstLine'>
          <span className='header__location'onClick={() => handleUpdateCity()}>{city == 1 ? "Полоцк" : "Новополоцк"}</span>
          <img src={iconMenu} alt="#" className="header__burger" onClick={() => setBurgerActive(true)} />
          <div className={`header__about ${burgerActive && 'header__about_active'}`}>
            <img src={closeIcon} alt="#" className="header__close" onClick={() => setBurgerActive(false)} />
            <a onClick={() => handleNavigate('partnership', 'partnership')}>Для вашего бизнеса</a>
            <a onClick={() => handleNavigate('aboutapp', 'aboutapp')}>О приложении</a>
            <a href='http://partners.good-day.by/franshizabel' target='_blank'>Франшиза</a>
            <a onClick={() => handleNavigate('contacts', 'contacts')}>Контакты</a>
          </div>
          <a href="tel:+375336949638" className='header__tel'>+375 (33) 694-96-38</a>
        </div>

        <div className='header__secondLine'>
          <a onClick={() => handleNavigate('discounts', 'discounts')}>
            <img src={logoHeader} alt="#" className="header__logo" />
          </a>
          <form action="" className="header__search-box" onSubmit={handleSearch}>
            <input 
              ref={searchInput} 
              type="text" 
              className="header__search" 
              placeholder='Поиск услуг и компаний...'
              // onBlur={handleSearchBlur}
            />
            <div className='header__search-iconBox'>
              <button>
                {(isSearchLoading == true && searchValue != '') ?
                  <LoadingSpinner/>
                  :
                  (isSearchLoading == false && searchValue != '') ?
                      <img className='header__search-icon_cross' src={crossIcon} alt="#" onClick={() => handleClearSearch()}/>
                      :
                      <img className='header__search-icon' src={lupa} alt="#" />
                }
              </button>
            </div>
          </form>
          {/* <span className="header__auth" onClick={() => logout()}>
            <a >Вход</a>
            <span className="header__auth-slash">/</span>
            <a >Регистрация</a>
          </span>  */}
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
            className={`header__nav-button header__nav-button_orange ${activeButton === 'promotion' ? 'header__nav-button_orange_active' : ''}`}
            onClick={() => handleNavigate('promotion', 'promotion')}
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
            className={`header__nav-button header__nav-button_gray ${activeButton === 'recreation' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''}`}
            onClick={() => handleNavigate('recreation', 'recreation')}
            >
            Отдых
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'accessories' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''}`}
            onClick={() => handleNavigate('accessories', 'accessories')}
            >
            Аксессуары
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'gifts' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''}`}
            onClick={() => handleNavigate('gifts', 'gifts')}
            >
            Подарки
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'clothesandshoes' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''}`}
            onClick={() => handleNavigate('clothesandshoes', 'clothesandshoe')}
            >
            Одежда и обувь
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'equipment' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''}`}
            onClick={() => handleNavigate('equipment', 'equipment')}
            >
            Техника
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'everythingforhome' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''}`}
            onClick={() => handleNavigate('everythingforhome', 'everythingforhome')}
            >
            Всё для дома
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'masterclasses' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''}`}
            onClick={() => handleNavigate('masterclasses', 'masterclasses')}
            >
            Мастер классы
          </button>
          <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'pets' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''}`}
            onClick={() => handleNavigate('pets', 'pets')}
            >
            Животные
          </button>
          <button 
              className={`header__nav-button header__nav-button_gray ${activeButton === 'repair' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''}`}
              onClick={() => handleNavigate('repair', 'repair')}
              >
              Ремонт
          </button>
          <button 
              className={`header__nav-button header__nav-button_gray  ${activeButton === 'other' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''}`}
              onClick={() => handleNavigate('other', 'other')}
              >
              Прочее
          </button>
          <button 
            className={`header__nav-buttonMore header__nav-button_gray ${moreButtonsActive ? 'header__nav-buttonMore_active' : ''}`}
            onClick={changeMoreButtonsActive}
            >
            Ещё
          </button>
          </div>
        </nav>
      </div>
    </header>
  )
}