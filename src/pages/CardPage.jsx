import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom';

import addressIcon from '../images/icons/share-map.svg.svg'
import timeIcon from '../images/icons/clock-ok.svg.svg'
import telIcon from '../images/icons/quick-call.svg.svg'
import internetIcon from '../images/icons/quick-globe.svg.svg'
import vkIcon from '../images/icons/social-vk.svg.svg'
import telegramIcon from '../images/icons/telegram-white.svg.svg'
import viberIcon from '../images/icons/social-viber.svg.svg'
import okIcon from '../images/icons/social-ok.svg.svg'
import mailruIcon from '../images/icons/mailru-white.svg.svg'

import { fetchGet } from '../api/fetch';
import endpoints from '../api/apiConfig';
import { Link, animateScroll as scroll } from 'react-scroll';
import { getWorkTimeStatus } from '../utils/workTimeDetailed';
import { formatDate } from '../utils/formatDate';
import { getValueOrDefault } from '../utils/getValueOrDefault';
import Breadcrambs from '../components/main/Breadcrambs';
import MyMap from '../components/general/MyMap';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


export default function CardPage() {

    const { id } = useParams();
    const [business, setBusiness] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    
    const [links, setLinks] = useState([])
    const [activeLink, setActiveLink] = useState(links[0] || {}); 
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };  

    const [status, setStatus] = useState('Закрыто');


    useEffect(() => {
      async function getData() {
        const data = await fetchGet(`${endpoints.BUSINESSBYID}${id}`);
        if (data) {
            setBusiness(data);
            console.log(data)
            setLinks([
                {
                title: 'Условия',
                body: data.discountRules || "Условия не указаны",
                },
                {
                title: 'Описание',
                body: data.description || "Описание не указанно",
                },
                {
                title: 'Адреса',
                body: data.addresses.map(address => address.description).join('\n') || "Адреса не указаны",
                },
            ])
            setActiveLink('Условия')    

            setStatus(getWorkTimeStatus(data.workTimeDetailed));


            setIsLoading(false);
        }
      }
      getData();
    }, []);
  
    const [selectedIcon, setSelectedIcon] = useState(null);
    const currentUrl = window.location.href;

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };

    const handleShare = () => {
        if (selectedIcon) {
        let shareUrl;
        switch (selectedIcon) {
            case 'vk':
            shareUrl = `https://vk.com/share.php?url=${currentUrl}`;
            break;
            case 'telegram':
            shareUrl = `https://telegram.me/share/url?url=${currentUrl}`;
            break;
            case 'viber':
            shareUrl = `viber://forward?text=${currentUrl}`;
            break;
            case 'ok':
            shareUrl = `https://connect.ok.ru/offer?url=${currentUrl}`;
            break;
            case 'mailru':
            shareUrl = `https://connect.mail.ru/share?url=${currentUrl}`;
            break;
            default:
            return;
        }

        window.open(shareUrl, '_blank');
        }
    };

    return (
        <section className='cardPage'>
            <Breadcrambs/>
            {isLoading ? (
                    <p>Loading...</p>
            ) : (
            <>
                <div className='cardPage__content'>
                    <article className="singleCard">
                        <div className="singleCard__firstLine"> 
                            <div className="singleCard__firstLine-textBox">
                                <h3 className="singleCard__title">{getValueOrDefault(business.name, 'Название не указано')}</h3>
                                <div className="singleCard__text-box">
                                    <span className="singleCard__text singleCard__text_gray">Действует: </span>
                                    <span className="singleCard__text">{getValueOrDefault(formatDate(business.promoCodeExpires), "Дата не указана")}</span>
                                </div>
                            </div>
                            <div className="singleCard__firstLine-btnBox">
                                {business.phone &&
                                    <button className="singleCard__button">
                                        <a href={`tel:${business.phone}`} >
                                            <img src={telIcon} alt="" />
                                        </a>
                                    </button>
                                }
                                {business.webLink &&
                                    <button className="singleCard__button">
                                        <a href={`tel:${business.phone}`}>
                                            <img src={internetIcon} alt="" />
                                        </a>
                                    </button>
                                }
                                <button className="singleCard__button">
                                    <Link to="map" smooth={true}>
                                        <img src={addressIcon} alt="" />
                                    </Link>
                                </button>
                                {business.isPromoCode &&
                                    <button className="singleCard__button singleCard__button_big">Получить промокод</button>
                                }
                            </div>
                        </div>
                        <div className="singleCard__secondLine">
                            <p className="singleCard__text singleCard__text_p">{getValueOrDefault(business.shortDescription, 'Описание не указано')}</p>
                            {/* coments link */}
                            {/* <a href="" className="singleCard__link">Отзывы</a> */}
                        </div>
                        <div className="singleCard__img-box">
                            {business.discount &&
                                <span className='singleCard__stock'>{getValueOrDefault(business.discount, 'Скидка не указана')}</span>
                            }
                                <Swiper
                                    //className='add_container'
                                    style={{height: '500px'}}
                                    spaceBetween={50}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false
                                    }}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination, Autoplay]}
                                    >

                                    {business.images.map((item) => 
                                        <SwiperSlide>
                                            <img src={endpoints.UPLOADS + item.url} alt="" className="singleCard__img" />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                        </div>
                        <div className="singleCard__widgets">
                            <div>
                                <div className="widget">
                                    <h4 className="widget__title">Об акции</h4>
                                    <div className="widget__content">
                                        <div className="widget__text-box">
                                            <span className="widget__text widget__text_gray">Срок действия </span>
                                            <span className="widget__text">{getValueOrDefault(formatDate(business.promoCodeExpires), "Дата не указана")}</span>
                                        </div>
                                        {/* count of view */}
                                        {/* <div className="widget__text-box">
                                            <span className="widget__text widget__text_gray">Просмотры акции </span>
                                            <span className="widget__text">999</span>
                                        </div> */}
                                        {/* count of use */}
                                        {/* <div className="widget__text-box">
                                            <span className="widget__text widget__text_gray">Воспользовались</span>
                                            <span className="widget__text">51</span>
                                        </div> */}
                                    </div>
                                    <span className="widget__text widget__text_gray">Успейте воспользоваться акцией до окончания времени действия</span>
                                </div>
                            </div>
                            <div className="widget-info"> 
                                {links.map((link, index) => 
                                    <span
                                    key={index}
                                    className={`widget-info__link ${activeLink === link.title ? 'widget-info__link_active' : ''}`}
                                    onClick={() => handleLinkClick(link.title)}
                                    >
                                    {link.title}
                                    </span>
                                )}  
                                <hr className="widget-info__hr"/>
                                <div className="widget-info__orangeLine"></div>
                                    {links.map((link, index) => 
                                        activeLink === link.title && <p className="widget-info__content" key={index}> {link.body}</p>
                                    )}

                            </div> 
                            <div className='singleCard__widgetsRight'>
                                <div className="widget">
                                    <h4 className="widget__title">Контакты</h4>
                                    {business.address && 
                                        <div className="widget__item widget__item_address widget__item_border">
                                            <button className="widget__item-btn">
                                                <img src={addressIcon} alt="" className="widget__item-icon" />
                                            </button>
                                            <p className="widget__item-text">
                                                {business.address}
                                                <Link className='widget__item-text_linkOnMap' to="map" smooth={true}>
                                                    Показать
                                                </Link>
                                            </p>
                                        </div>
                                    }
                                    {business.workTime && 
                                        <div className="widget__item widget__item_border">
                                            <button className="widget__item-btn">
                                                <img src={timeIcon} alt="" className="widget__item-icon" />
                                            </button>
                                            <p className="widget__item-text">
                                                {business.workTime} <br />
                                                <span className={`widget__item-text ${
                                                getWorkTimeStatus(business.workTimeDetailed) === 'Открыто' 
                                                    ? 'widget__item-text_green' 
                                                    : getWorkTimeStatus(business.workTimeDetailed).includes('Откроется через') 
                                                        ? 'widget__item-text_orange' 
                                                        : 'widget__item-text_red'
                                                }`}>{status}</span>
                                            </p>
                                        </div>
                                    }
                                    {business.phone && 
                                        <div className="widget__item widget__item_border">
                                            <button className="widget__item-btn">
                                                <img src={telIcon} alt="" className="widget__item-icon" />
                                            </button>
                                            <a className="widget__item-text" href={`tel:${business.phone}`}>
                                                {business.phone}
                                            </a>
                                        </div>
                                    }
                                    {(business.webLink || business.vkLink) &&
                                        <div className="widget__item widget__item_big">
                                            <button className="widget__item-btn">
                                                <img src={internetIcon} alt="" className="widget__item-icon" />           
                                            </button>
                                            <div className="widget__item-text_big">
                                                {business.webLink &&
                                                    <p className="widget__item-text widget__item-text_green">
                                                        Сайт <br />
                                                        <a href={business.webLink}>{business.webLink}</a>
                                                    </p>
                                                }
                                                {business.vkLink && 
                                                    <p className="widget__item-text widget__item-text_green">
                                                        Страница ВКонтакте <br />
                                                        <a href={business.vkLink}>{business.vkLink}</a>
                                                    </p>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div style={{height: "30px"}}></div>
                               <div className="widget">
                                    <h4 className="widget__title">Поделиться</h4>
                                    <div className="widget__item">
                                        <button
                                            className={`widget__item-btn widget__item-btn_vk ${selectedIcon === 'vk' ? 'widget__item-btn_selected' : ''}`}
                                            onClick={() => handleIconClick('vk')}
                                            >
                                            <a>
                                                <img src={vkIcon} alt="" className="widget__item-icon" />
                                            </a>
                                        </button>
                                        <button
                                            className={`widget__item-btn widget__item-btn_telegram ${selectedIcon === 'telegram' ? 'widget__item-btn_selected' : ''}`}
                                            onClick={() => handleIconClick('telegram')}
                                            >
                                            <a>
                                                <img src={telegramIcon} alt="" className="widget__item-icon" />
                                            </a>
                                        </button>
                                        <button
                                            className={`widget__item-btn widget__item-btn_viber ${selectedIcon === 'viber' ? 'widget__item-btn_selected' : ''}`}
                                            onClick={() => handleIconClick('viber')}
                                            >
                                            <a>
                                                <img src={viberIcon} alt="" className="widget__item-icon" />
                                            </a>
                                        </button>
                                        <button
                                            className={`widget__item-btn widget__item-btn_ok ${selectedIcon === 'ok' ? 'widget__item-btn_selected' : ''}`}
                                            onClick={() => handleIconClick('ok')}
                                            >
                                            <a>
                                                <img src={okIcon} alt="" className="widget__item-icon" />
                                            </a>
                                        </button>
                                        <button
                                            className={`widget__item-btn widget__item-btn_mailru ${selectedIcon === 'mailru' ? 'widget__item-btn_selected' : ''}`}
                                            onClick={() => handleIconClick('mailru')}
                                            >
                                            <a>
                                                <img src={mailruIcon} alt="" className="widget__item-icon" />
                                            </a>
                                        </button>
                                        <button className="widget__item-btn"></button>
                                    </div>
                                    <button
                                        className="widget__item-btn_big"
                                        onClick={handleShare}
                                    >
                                        Скопировать ссылку
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <MyMap data={business}/>
            </>
            )}
            {/* comments */}
            {/* <div className="comments">
                <div className="comments__firstLine">
                    <div>
                        <h3 className="comments__title">Отзывы</h3>
                        <span>Раскажите о ваших впечатлениях...</span>
                    </div>
                    <button className="comments__button">Написать отзыв</button>
                </div>
                <div className="comments__category-box">
                    <button className="comments__categotyBtn">
                        Все
                    </button>
                </div>
                <div className="comments__content">
                    <div className="comment">
                        <div className="comment__FirstLine">
                            <img src="" alt="" className="comment__avatar" />
                            <div className="comment__author-box">
                                <span className="comment__name">Ноунэйм</span>
                                <span>
                                    <span className="comment__author-info">Позитивный отзыв</span>
                                    <span className="comment__author-info">8 июля 2024 в 15:45</span>
                                </span>
                            </div>
                        </div>
                        <p className="comment__text">БлаБлаБла</p>
                        <div className="comment__lastLine">
                            <span className="comment__commInfo comment__commInfo_like">2 человека считают этот отзыв полезным</span>
                            <span className="comment__commInfo comment__commInfo_comment">Ответить</span>
                            <button className="comment__more">...</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
  )
}
