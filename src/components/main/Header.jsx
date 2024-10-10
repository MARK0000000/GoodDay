import React, {useContext, useEffect, useRef, useState} from 'react'
import logoHeader from '../../images/other/logoHeader.svg'
import { useLocation } from 'react-router-dom';
import lupa from '../../images/icons/lupa.svg'
import { SearchContext } from '../../context/Search';
import { NavigateContext } from '../../context/Navigate';
import iconMenu from '../../images/icons/icon_menu.svg';
import closeIcon from '../../images/icons/close.svg';
import { CityContext } from '../../context/City';
import LoadingSpinner from '../UI/loaders/LoaderSpinner';
import crossIcon from '../../images/icons/cross.svg'
import { getEndpoint } from '../../utils/workWithUrl';
import NavPages from './header/NavPages';
import CityModal from './header/CityModal';

export default function Header() {
  const location = useLocation();
  const endpoint = getEndpoint(location);
  // const {logout} = useAuth()
  const {setSearchValue, isSearchLoading, searchValue, getCategoryId} = useContext(SearchContext)
  const {city, updateCity, cities} = useContext(CityContext)
  const cityName = cities.find(item => item.id === city);
  const {handleNavigate, activeButton} = useContext(NavigateContext)
  const searchInput = useRef()
  const [cityModalActive, setCityModalActive] = useState(false)
  const closeCityModal = () => {
    setCityModalActive(false)
  }
  const [burgerActive, setBurgerActive] = useState(false)
  useEffect(() => {
    if (endpoint == 'promotions' || endpoint == 'discounts' || endpoint == 'services' || (endpoint in getCategoryId)) {
      setSearchValue(searchInput.current.value)
    }
  }, [endpoint])
  

  function handleSearch(event) {
    event.preventDefault()

    let value = searchInput.current.value

    setSearchValue(value)

  }
  const handleClearSearch = () => {
    searchInput.current.value = ''; 
    setSearchValue(''); 
  };
  

  return (
    <header className="header">
      <div className='container header__container'>
        <div className='header__firstLine'>
          <span className='header__location'onClick={() => setCityModalActive(cityModalActive ? false : true)}>{cityName.name}</span>
          <CityModal active={cityModalActive} onClose={closeCityModal}/>
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
        <NavPages/>
      </div>
    </header>
  )
}