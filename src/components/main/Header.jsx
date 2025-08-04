import React, { useContext, useEffect, useRef, useState } from 'react'
import logoHeader from '../../images/other/logoHeader.svg'
import lupa from '../../images/icons/lupa.svg'
import { SearchContext } from '../../context/Search';
import { NavigateContext } from '../../context/Navigate';
import iconMenu from '../../images/icons/icon_menu.svg';
import closeIcon from '../../images/icons/close.svg';
import { CityContext } from '../../context/City';
import LoadingSpinner from '../UI/loaders/LoaderSpinner';
import crossIcon from '../../images/icons/cross.svg'
import NavPages from './header/NavPages';
import CityModal from './header/CityModal';
import { PosterCategoriesContext } from '../../context/PosterCategories';

import { Fancybox } from '@fancyapps/ui';
import ReactDOM from 'react-dom';
export default function Header() {

  const { setSearchValue, isSearchLoading, searchValue, setData } = useContext(SearchContext)
  const { cityName, cities, updateCity } = useContext(CityContext)
  const { typeButtonClick } = useContext(NavigateContext)
  const { setNavCategories, setSoonIsEpmty } = useContext(PosterCategoriesContext)
  const searchInput = useRef()

  const [burgerActive, setBurgerActive] = useState(false)


  function handleSearch(event) {
    event.preventDefault()

    let value = searchInput.current.value
    if (value === "") {
      handleClearSearch()
    } else {
      setSearchValue(value)
    }
  }

  const handleClearSearch = () => {
    searchInput.current.value = '';
    setSearchValue('');
    setNavCategories([])
    setData([])
    setSoonIsEpmty(true)
  };

  const handleGetCityModal = () => {

    const modalContainer = document.createElement('div');

    Fancybox.show([
      {
        src: modalContainer,
        type: 'html',
      },
    ]);

    ReactDOM.render(<CityModal cities={cities} updateCity={updateCity}/>, modalContainer);
  };

  return (
    <header className="header">
      <div className='container header__container'>
        <div className='header__firstLine'>
          <span className='header__location'
            onClick={handleGetCityModal}
            >
            {cityName}
          </span>
          <img src={iconMenu} alt="#" className="header__burger" onClick={() => setBurgerActive(true)} />
          <div className={`header__about ${burgerActive && 'header__about_active'}`}>
            <img src={closeIcon} alt="#" className="header__close" onClick={() => setBurgerActive(false)} />
            <a href='https://partners.good-day.by/goodday_openair2025' target='_blank' rel="noreferrer">Good Day Open Air</a>
            {/* <a href='https://partners.good-day.by/gastrofest' target='_blank' rel="noreferrer">Good Day Gastrofest</a> */}
            <a onClick={() => typeButtonClick('partnership', 'partnership')}>Для вашего бизнеса</a>
            <a onClick={() => typeButtonClick('aboutapp', 'aboutapp')}>О приложении</a>
            <a href='http://partners.good-day.by/franshizabel' target='_blank' rel="noreferrer">Франшиза</a>
            <a onClick={() => typeButtonClick('contacts', 'contacts')}>Контакты</a>
          </div>
          <a href="tel:+375336949638" className='header__tel'>+375 (33) 694-96-38</a>
        </div>

        <div className='header__secondLine'>
          <a onClick={() => typeButtonClick('posters', 'posters')}>
            <img src={logoHeader} alt="#" className="header__logo" />
          </a>
          <form action="" className="header__search-box" onSubmit={handleSearch}>
            <input
              ref={searchInput}
              type="text"
              className="header__search"
              placeholder='Поиск услуг и компаний...'
            />
            <div className='header__search-iconBox'>
              <button>
                {(isSearchLoading === true && searchValue !== '') ?
                  <LoadingSpinner />
                  :
                  (isSearchLoading === false && searchValue !== '') ?
                    <img className='header__search-icon_cross' src={crossIcon} alt="#" onClick={() => handleClearSearch()} />
                    :
                    <img className='header__search-icon' src={lupa} alt="#" />
                }
              </button>
            </div>
          </form>
        </div>
        <NavPages />
      </div>
    </header>
  )
}