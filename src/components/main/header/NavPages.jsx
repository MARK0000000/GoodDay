import React, {useState, useContext} from 'react'
import { NavigateContext } from '../../../context/Navigate';
import { TypeOfDataContext } from '../../../context/TypeOfData';
import { Link, animateScroll as scroll } from 'react-scroll';
import { PosterCategoriesContext } from '../../../context/PosterCategories';

export default function NavPages() {
    const {handleNavigate, activeButton} = useContext(NavigateContext)
    const {type, changeType} = useContext(TypeOfDataContext)
    const [moreButtonsActive, setMoreButtonsActive] = useState(false)
    const { categories } = useContext(PosterCategoriesContext);

    const changeMoreButtonsActive = () => {
        if (moreButtonsActive == true) {
          setMoreButtonsActive(false)
        } else {
          setMoreButtonsActive(true)
        }
      }
      const typeButtonClick = (type, route) => {
        changeType(type)
        handleNavigate(route, route)
    }
      
  return (
    <nav className="header__nav">
    <div className="header__navCore">
    <button 
            className={`header__nav-button header__nav-button_white ${activeButton === 'posters' ? 'header__nav-button_white_active' : ''}`}
            onClick={() => typeButtonClick('posters', 'posters')}
        >
            Афиша
        </button>
        <button
            className={`header__nav-button header__nav-button_blue ${type === 'discounts' ? 'header__nav-button_blue_active' : ''}`}
            onClick={() => typeButtonClick('discounts', 'discounts')}
        >
            Скидки
        </button>
        <button 
            className={`header__nav-button header__nav-button_orange ${type === 'promotion' ? 'header__nav-button_orange_active' : ''}`}
            onClick={() => typeButtonClick('promotion', 'promotion')}
        >
            Акции
        </button>
        <button 
            className={`header__nav-button header__nav-button_red ${activeButton === 'services' ? 'header__nav-button_red_active' : ''}`}
            onClick={() => typeButtonClick('', 'services')}
        >
            Услуги
        </button>
    </div>
    {(type == "discounts" || type == "promotion") ?
        <div className="header__navMore">
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'entertainment' ? 'header__nav-button_gray_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('entertainment', 'entertainment')}
            >
            Развлечения
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'beauty' ? 'header__nav-button_gray_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('beauty', 'beauty')}
            >
            Красота
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'food' ? 'header__nav-button_gray_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('food', 'food')}
            >
            Еда
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'health' ? 'header__nav-button_gray_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('health', 'health')}
            >
            Здоровье
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'children' ? 'header__nav-button_gray_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('children', 'children')}
            >
            Дети
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'sport' ? 'header__nav-button_gray_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('sport', 'sport')}
            >
            Спорт
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'education' ? 'header__nav-button_gray_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('education', 'education')}
            >
            Обучение
            </button>
            <button 
                className={`header__nav-button header__nav-button_gray ${activeButton === 'auto' ? 'header__nav-button_gray_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
                onClick={() => handleNavigate('auto', 'auto')}
                >
                Авто
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'recreation' ? 'header__nav-button_gray_active' : ''}  ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('recreation', 'recreation')}
            >
            Отдых
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'accessories' ? 'header__nav-button_gray_active' : ''}  ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('accessories', 'accessories')}
            >
            Аксессуары
            </button>
            <button 
                className={`header__nav-button header__nav-button_gray ${activeButton === 'repair' ? 'header__nav-button_gray_active' : ''}  ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
                onClick={() => handleNavigate('repair', 'repair')}
                >
                Ремонт
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'gifts' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('gifts', 'gifts')}
            >
            Подарки
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'clothesandshoes' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('clothesandshoes', 'clothesandshoe')}
            >
            Одежда и обувь
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'equipment' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('equipment', 'equipment')}
            >
            Техника
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'everythingforhome' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('everythingforhome', 'everythingforhome')}
            >
            Всё для дома
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'masterclasses' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('masterclasses', 'masterclasses')}
            >
            Мастер классы
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${activeButton === 'pets' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
            onClick={() => handleNavigate('pets', 'pets')}
            >
            Животные
            </button>
            <button 
                className={`header__nav-button header__nav-button_gray  ${activeButton === 'other' ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreButtonsActive ? 'header__nav-button_hidden_active' : ''} ${type === '' ? 'header__nav-button_gray_disabled' : ''}`}
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
        :
        type != "" &&
        <div className="header__navMore">
            {categories.map(category => (
                <Link key={category.idCategory} to={`category-${category.idCategory}`} smooth={true}>
                    <button 
                        className={`header__nav-button header__nav-button_gray`}
                    >
                        {category.categoryName}
                    </button>
                </Link>
            
            ))}
        </div>
    }
  </nav>

  )
}
