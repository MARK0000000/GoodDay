import React, {useState, useContext} from 'react'
import { NavigateContext } from '../../../context/Navigate';
import { TypeOfDataContext } from '../../../context/TypeOfData';
import { Link } from 'react-scroll';
import { PosterCategoriesContext } from '../../../context/PosterCategories';
import { CategoriesContext } from '../../../context/CategoriesContext';
export default function NavPages() {
    const { discountCategory, promotionCategory, updateDiscountCategory, updatePromotionCategory} = useContext(CategoriesContext)
    const {typeButtonClick, typeButtonCategoriesClick} = useContext(NavigateContext)
    const {type} = useContext(TypeOfDataContext)
    const { navCategories, soonIsEpmty } = useContext(PosterCategoriesContext);
    const [moreDiscountsButtonsActive, setMoreDiscountsButtonsActive] = useState(false)
    const changeMoreDiscountsButtonsActive = () => { moreDiscountsButtonsActive ? setMoreDiscountsButtonsActive(false) :setMoreDiscountsButtonsActive(true) }

    const [morePromotionButtonsActive, setMorePromotionButtonsActive] = useState(false)
    const changeMorePromotionButtonsActive = () => { morePromotionButtonsActive ? setMorePromotionButtonsActive(false) :setMorePromotionButtonsActive(true) }

  return (
    <nav className="header__nav">
    <div className="header__navCore">
    <button 
            className={`header__nav-button header__nav-button_white ${type === 'posters' ? 'header__nav-button_white_active' : ''}`}
            onClick={() => typeButtonClick('posters', 'posters')}
        >
            Афиша
        </button>
        <button
            className={`header__nav-button header__nav-button_blue ${type === 'discounts' ? 'header__nav-button_blue_active' : ''}`}
            onClick={() => typeButtonCategoriesClick('discounts', 'discounts')}
        >
            Скидки
        </button>
        <button 
            className={`header__nav-button header__nav-button_orange ${type === 'promotion' ? 'header__nav-button_orange_active' : ''}`}
            onClick={() => typeButtonCategoriesClick('promotion', 'promotion')}
        >
            Акции
        </button>
        <button 
            className={`header__nav-button header__nav-button_red ${type === 'services' ? 'header__nav-button_red_active' : ''}`}
            onClick={() => typeButtonClick('services', 'services')}
        >
            Услуги
        </button>
    </div>
    {type === "discounts" &&
        <div className="header__navMore">
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 7 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updateDiscountCategory(7)}
            >
            Развлечения
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 6 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updateDiscountCategory(6)}
            >
            Красота
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 4 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updateDiscountCategory(4)}
            >
            Еда
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 5 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updateDiscountCategory(5)}
            >
            Здоровье
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 10 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updateDiscountCategory(10)}
            >
            Дети
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 19 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updateDiscountCategory(19)}
            >
            Спорт
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 2 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updateDiscountCategory(2)}
            >
            Обучение
            </button>
            <button 
                className={`header__nav-button header__nav-button_gray ${discountCategory === 8 ? 'header__nav-button_gray_active' : ''}`}
                onClick={() => updateDiscountCategory(8)}
                >
                Авто
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 9 ? 'header__nav-button_gray_active' : ''} `}
            onClick={() => updateDiscountCategory(9)}
            >
            Отдых
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 12 ? 'header__nav-button_gray_active' : ''} `}
            onClick={() => updateDiscountCategory(12)}
            >
            Аксессуары
            </button>
            <button 
                className={`header__nav-button header__nav-button_gray ${discountCategory === 14 ? 'header__nav-button_gray_active' : ''} `}
                onClick={() => updateDiscountCategory(14)}
                >
                Ремонт
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 3 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreDiscountsButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updateDiscountCategory(3)}
            >
            Подарки
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 11 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreDiscountsButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updateDiscountCategory(11)}
            >
            Одежда и обувь
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 16 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreDiscountsButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updateDiscountCategory(16)}
            >
            Техника
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 13 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreDiscountsButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updateDiscountCategory(13)}
            >
            Всё для дома
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 18 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreDiscountsButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updateDiscountCategory(18)}
            >
            Мастер классы
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${discountCategory === 17 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreDiscountsButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updateDiscountCategory(17)}
            >
            Животные
            </button>
            <button 
                className={`header__nav-button header__nav-button_gray  ${discountCategory === 15 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${moreDiscountsButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
                onClick={() => updateDiscountCategory(15)}
                >
                Прочее
            </button>
            <button 
            className={`header__nav-buttonMore header__nav-button_gray ${moreDiscountsButtonsActive ? 'header__nav-buttonMore_active' : ''}`}
            onClick={changeMoreDiscountsButtonsActive}
            >
            Ещё
            </button>
        </div>
    }
    {type === "promotion" &&
        <div className="header__navMore">
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 7 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updatePromotionCategory(7)}
            >
            Развлечения
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 6 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updatePromotionCategory(6)}
            >
            Красота
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 4 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updatePromotionCategory(4)}
            >
            Еда
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 5 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updatePromotionCategory(5)}
            >
            Здоровье
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 10 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updatePromotionCategory(10)}
            >
            Дети
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 19 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updatePromotionCategory(19)}
            >
            Спорт
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 2 ? 'header__nav-button_gray_active' : ''}`}
            onClick={() => updatePromotionCategory(2)}
            >
            Обучение
            </button>
            <button 
                className={`header__nav-button header__nav-button_gray ${promotionCategory === 8 ? 'header__nav-button_gray_active' : ''}`}
                onClick={() => updatePromotionCategory(8)}
                >
                Авто
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 9 ? 'header__nav-button_gray_active' : ''} `}
            onClick={() => updatePromotionCategory(9)}
            >
            Отдых
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 12 ? 'header__nav-button_gray_active' : ''} `}
            onClick={() => updatePromotionCategory(12)}
            >
            Аксессуары
            </button>
            <button 
                className={`header__nav-button header__nav-button_gray ${promotionCategory === 14 ? 'header__nav-button_gray_active' : ''} `}
                onClick={() => updatePromotionCategory(14)}
                >
                Ремонт
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 3 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${morePromotionButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updatePromotionCategory(3)}
            >
            Подарки
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 11 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${morePromotionButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updatePromotionCategory(11)}
            >
            Одежда и обувь
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 16 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${morePromotionButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updatePromotionCategory(16)}
            >
            Техника
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 13 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${morePromotionButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updatePromotionCategory(13)}
            >
            Всё для дома
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 18 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${morePromotionButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updatePromotionCategory(18)}
            >
            Мастер классы
            </button>
            <button 
            className={`header__nav-button header__nav-button_gray ${promotionCategory === 17 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${morePromotionButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
            onClick={() => updatePromotionCategory(17)}
            >
            Животные
            </button>
            <button 
                className={`header__nav-button header__nav-button_gray  ${promotionCategory === 15 ? 'header__nav-button_gray_active' : ''} header__nav-button_hidden ${morePromotionButtonsActive ? 'header__nav-button_hidden_active' : ''} `}
                onClick={() => updatePromotionCategory(15)}
                >
                Прочее
            </button>
            <button 
            className={`header__nav-buttonMore header__nav-button_gray ${morePromotionButtonsActive ? 'header__nav-buttonMore_active' : ''}`}
            onClick={changeMorePromotionButtonsActive}
            >
            Ещё
            </button>
        </div>
    }
    {type === "posters" &&
        <div className="header__navMore">
            {navCategories.map(category => (
                <Link key={category.idCategory} to={`category-${category.idCategory}`} smooth={true}>
                    <button 
                        className={`header__nav-button header__nav-button_posters header__nav-button_gray `}
                    >
                        {category.categoryName}
                    </button>
                </Link>
            
            ))}
            {!soonIsEpmty &&
                <Link to={`category-soon`} smooth={true}>
                <button 
                    className={`header__nav-button header__nav-button_posters header__nav-button_gray`}
                >
                    Скоро
                </button>
            </Link>
            }
        </div>
    }
  </nav>

  )
}
