import React, {useEffect, useState, useContext} from 'react'
import { useLocation, useParams } from 'react-router-dom';
import addressIcon from '../images/icons/share-map.svg.svg'
import telIcon from '../images/icons/quick-call.svg.svg'
import internetIcon from '../images/icons/quick-globe.svg.svg'
import { fetchGet } from '../api/fetch';
import useEndpoints from '../api/apiConfig';
import { Link, animateScroll as scroll } from 'react-scroll';
import { getWorkTimeStatus } from '../utils/workTimeDetailed';
import { formatDate } from '../utils/formatDate';
import { getValueOrDefault } from '../utils/getValueOrDefault';
import Breadcrambs from '../components/main/Breadcrambs';
import MyMap from '../components/businessPage/MyMap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { SkeletonBusinessPage } from '../components/UI/loaders/SkeletonBusinessPage'
import { SkeletonBusinessPageMedia } from '../components/UI/loaders/SkeletonBusinessPageMedia' 
import ShareWidget from '../components/businessPage/ShareWidget';
import ContactsWidget from '../components/businessPage/ContactsWidget';
import InfoWidget from '../components/businessPage/InfoWidget';
import AboutStock from '../components/businessPage/AboutStock';
import { handleNavigateSocial } from '../utils/navigateSocial';
import { TypeOfDataContext } from '../context/TypeOfData';

export default function BusinessPage() {
    const endpoints = useEndpoints();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const {id} = useParams();
    const [business, setBusiness] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {type} = useContext(TypeOfDataContext)

    const [links, setLinks] = useState([])
    const [activeLink, setActiveLink] = useState(links[0] || {}); 
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };  

    const [status, setStatus] = useState('Закрыто');
    
    useEffect(() => {
      async function getData() {
        const data = await fetchGet(`${type == 'discounts' ? endpoints.DISCOUNT_BY_ID + id : endpoints.PROMOTION_BY_ID + id} `);
        if (data && data != Promise) {
            setBusiness(data);
            setLinks([
                {
                title: 'Описание',
                body: data.description || "Описание не указанно",
                },
                {
                title: 'Условия',
                body: data.discountRules || "Условия не указаны",
                },
                {
                title: 'Адреса',
                body: (data.addresses[0] ? data.addresses.map(address => address.description).join('\n') : false) ||  "Адреса не указаны",
                },
            ])
            setActiveLink('Описание')     
            setStatus(getWorkTimeStatus(data.workTimeDetailed));
            setIsLoading(false);            
        }
    }
    getData();
    }, [id]);

    return (
        <section>
            <Breadcrambs current={business.name}/>
            {isLoading ? (
                isMobile ? <SkeletonBusinessPageMedia/> : <SkeletonBusinessPage/> 
            ) : (
            <>
                <article className="businessPage">
                    <div className="businessPage__firstLine"> 
                        <div className="businessPage__firstLine-textBox">
                            <h3 className="businessPage__title">{getValueOrDefault(business.name, 'Название не указано')}</h3>
                            <div className="businessPage__text-box">
                                <span className="businessPage__text businessPage__text_gray">Действует по: </span>
                                <span className="businessPage__text">{getValueOrDefault(formatDate(business.promoCodeExpires), "Дата не указана")}</span>
                            </div>
                        </div>
                        <div className="businessPage__firstLine-btnBox">
                            {business.phone &&
                                <button className="businessPage__button">
                                    <a href={`tel:${business.phone}`} >
                                        <img src={telIcon} alt="" />
                                    </a>
                                </button>
                            }
                            {business.webLink &&
                                <button className="businessPage__button">
                                    <a onClick={() => handleNavigateSocial('web', `${business.webLink}`)}>
                                        <img src={internetIcon} alt="" />
                                    </a>
                                </button>
                            }
                            {business.address[0] &&
                                <button className="businessPage__button">
                                    <Link to="map" smooth={true}>
                                        <img src={addressIcon} alt="" />
                                    </Link>
                                </button>
                            }
                            {/* Promocode */}
                            {/* {business.isPromoCode &&
                                <button className="businessPage__button businessPage__button_big">
                                    <a href="https://goodday.taplink.ws/" target='_blank'>
                                        Получить промокод
                                    </a>
                                </button>
                            } */}
                        </div>
                    </div>
                    <div className="businessPage__secondLine">
                        <p className="businessPage__text businessPage__text_p">{getValueOrDefault(business.shortDescription, 'Описание не указано')}</p>
                        {/* <a href="" className="businessPage__link">Отзывы</a> */}
                    </div>
                    <div className="businessPage__widgets">
                        <div className="businessPage__img-box">
                            {business.discount &&
                                <span className='businessPage__stock'>{getValueOrDefault(business.discount, 'Скидка не указана')}</span>
                            }
                                <Swiper
                                    style={{height: '100%'}}
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

                                    {business.images.map((item, index) => 
                                        <SwiperSlide  key={index} >
                                            <img src={endpoints.UPLOADS + item.url} alt="" className="businessPage__img"/>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                        </div>
                        <AboutStock business={business}/>
                        <InfoWidget links={links} activeLink={activeLink} handleLinkClick={handleLinkClick}/>
                        <div className='businessPage__widgetsRight'>
                            <ContactsWidget business={business} status={status}/>
                            <ShareWidget/>
                        </div>
                    </div>
                </article>
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
