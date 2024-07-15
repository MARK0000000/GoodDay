import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import exampleImg from '../images/4k.jpg'
import addressIcon from '../images/share-map.svg.svg'
import timeIcon from '../images/clock-ok.svg.svg'
import telIcon from '../images/quick-call.svg.svg'
import internetIcon from '../images/quick-globe.svg.svg'
import vkIcon from '../images/social-vk.svg.svg'
import telegramIcon from '../images/telegram-white.svg.svg'
import viberIcon from '../images/social-viber.svg.svg'
import okIcon from '../images/social-ok.svg.svg'
import mailruIcon from '../images/mailru-white.svg.svg'

export default function CardPage() {
    const [cards, setCards] = useState([
        {
            id: 1,
            stock: "-10%",
            img: exampleImg,
            likeActive: false,
            title: "Название компании 1",  
            validUntil: "по 6 фвгуста",
            description: "",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 2,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании 2",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 3,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 4,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 5,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 6,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 7,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 8,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 9,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 10,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 11,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 12,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
    ])
    const location = useLocation();
    const parts = location.pathname.split("/");
    const id = parseInt(parts[2]); // преобразуем id в число
  
    const [currentCard, setcurrentCard] = useState(null); // инициализируем currentCard как null
  
    useEffect(() => {
      // Находим карточку с соответствующим id
      const card = cards.find(card => card.id === id);
      setcurrentCard(card);
    }, [cards, id]);
      

  return (
    <section className='cardPage'>
        {currentCard ? (
        <div className='cardPage__content'>
            <article className="singleCard">
                <div className="singleCard__firstLine"> 
                    <div className="singleCard__firstLine-textBox">
                        <h3 className="singleCard__title">{currentCard.title}</h3>
                        <div className="singleCard__text-box">
                            <span className="singleCard__text singleCard__text_gray">Действует: </span>
                            <span className="singleCard__text">{currentCard.validUntil}</span>
                        </div>
                    </div>
                    <div className="singleCard__firstLine-btnBox">
                        <button className="singleCard__button">
                            <img src={telIcon} alt="" />
                        </button>
                        <button className="singleCard__button">
                            <img src={internetIcon} alt="" />
                        </button>
                        <button className="singleCard__button">
                             <img src={addressIcon} alt="" />
                        </button>
                        <button className="singleCard__button singleCard__button_big">Получить промокод</button>
                    </div>
                </div>
                <div className="singleCard__secondLine">
                    <p className="singleCard__text singleCard__text_p">{currentCard.description}</p>
                    <a href="" className="singleCard__link">Отзывы</a>
                </div>
                <div className="singleCard__img-box">
                    <span className='singleCard__stock'>{currentCard.stock}</span>
                    <img src={currentCard.img} alt="" className="singleCard__img" />
                </div>
                <div className="singleCard__widgets">
                    <div>
                        <div className="widget">
                            <h4 className="widget__title">Об акции</h4>
                            <div className="widget__content">
                                <div className="widget__text-box">
                                    <span className="widget__text widget__text_gray">Срок действия </span>
                                    <span className="widget__text">{currentCard.validUntil}</span>
                                </div>
                                <div className="widget__text-box">
                                    <span className="widget__text widget__text_gray">Просмотры акции </span>
                                    <span className="widget__text">999</span>
                                </div>
                                <div className="widget__text-box">
                                    <span className="widget__text widget__text_gray">Воспользовались</span>
                                    <span className="widget__text">51</span>
                                </div>
                            </div>
                            <span className="widget__text widget__text_gray">Успейте воспользоваться акцией до окончания времени действия</span>
                        </div>
                    </div>
                    <div className="widget_info"> 
                        <span className="widget_info__link">Условия</span>
                        <span className="widget_info__link">Описание</span>
                        <span className="widget_info__link">Адреса</span>
                        <hr className="widget__hr" />
                        <p className="widget_info__content">
                            Акция предоставляет возможность...
                        </p>
                    </div>
                    <div className='singleCard__widgetsRight'>
                        <div className="widget">
                            <h4 className="widget__title">Контакты</h4>
                            <div className="widget__item widget__item_address">
                                <button className="widget__item-btn">
                                    <img src={addressIcon} alt="" className="widget__item-icon" />
                                </button>
                                <p className="widget__item-text">
                                    Адрес Адрес Адрес Адрес Адрес Адрес
                                    <span>Показать</span>
                                </p>
                            </div>
                            <div className="widget__item">
                                <button className="widget__item-btn">
                                    <img src={timeIcon} alt="" className="widget__item-icon" />
                                </button>
                                <p className="widget__item-text">
                                    Ежедневно с 8:00 до 18:00 <br />
                                    <span className='widget__item-text_green'>Открыто</span>
                                </p>
                            </div>
                            <div className="widget__item">
                                <button className="widget__item-btn">
                                    <img src={telIcon} alt="" className="widget__item-icon" />
                                </button>
                                <a className="widget__item-text">
                                    +375 33 111-11-11
                                </a>
                            </div>
                            <div className="widget__item widget__item_big">
                                <button className="widget__item-btn">
                                    <img src={internetIcon} alt="" className="widget__item-icon" />           
                                </button>
                                <div className="widget__item-text_big">
                                    <p className="widget__item-text widget__item-text_green">
                                        Сайт <br />
                                        <a href="">vk.link</a>
                                    </p>
                                    <p className="widget__item-text widget__item-text_green">
                                        Страница ВКонтакте <br />
                                        <a href="">vk.link</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="widget">
                            <h4 className="widget__title">Поделиться</h4>
                            <div className="widget__item">
                                <button className="widget__item-btn widget__item-btn_vk">
                                    <img src={vkIcon} alt="" className="widget__item-icon" />
                                </button>
                                <button className="widget__item-btn widget__item-btn_telegram">
                                    <img src={telegramIcon} alt="" className="widget__item-icon" />
                                </button>
                                <button className="widget__item-btn widget__item-btn_viber">
                                    <img src={viberIcon} alt="" className="widget__item-icon" />
                                </button>
                                <button className="widget__item-btn widget__item-btn_ok">
                                    <img src={okIcon} alt="" className="widget__item-icon" />
                                </button>
                                <button className="widget__item-btn widget__item-btn_mailru">
                                    <img src={mailruIcon} alt="" className="widget__item-icon" />
                                </button>
                                <button className="widget__item-btn"></button>
                            </div>
                            <button className="widget__item-btn_big">
                                Скопировать ссылку
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        ) : (
        <p>Loading...</p>
        )}
        <div className='cardPage__map'></div>
        <div className='cardPage__comments'></div>
    </section>
  )
}
{/* <div className="card__img-box">
<span className='card__stock'>{currentCard.stock}</span>
<img src={currentCard.img} alt="" className="card__img" />
</div>
<div className="card__content">
<h3 className="card__title">{currentCard.title}</h3>
<div className="card__text-box">
    <span className="card__text card__text_gray">Действует: </span>
    <span className="card__text">{currentCard.validUntil}</span>
</div>
<p className="card__text card__text_p">{currentCard.description}</p>
<div className="card__text-box card__text-box_vertical">
    <span className="card__text">Адрес {currentCard.address}</span>
    <span className="card__text">{currentCard.status}</span>
</div>
</div>
<hr className='card__hr' />
<div className="card__bottom">
<div>
    <span className="card__text_bottom card__text_bottom_paid">{currentCard.buyCount}</span>
    <span className="card__text_bottom card__text_bottom_comments">{currentCard.commntsCount}</span>
</div>
</div> */}
