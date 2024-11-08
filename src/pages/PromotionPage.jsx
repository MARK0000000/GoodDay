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
import { SkeletonPromotionPage } from '../components/UI/loaders/SkeletonPromotionPage'
import { SkeletonPromotionPageMedia } from '../components/UI/loaders/SkeletonPromotionPageMedia' 
import ShareWidget from '../components/businessPage/ShareWidget';
import ContactsWidget from '../components/businessPage/ContactsWidget';
import InfoWidget from '../components/businessPage/InfoWidget';
import AboutStock from '../components/businessPage/AboutStock';
import { handleNavigateSocial } from '../utils/navigateSocial';

export default function PromotionPage() {
    const endpoints = useEndpoints();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const {id} = useParams();
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
        const data = await fetchGet(`${endpoints.PROMOTION_BY_ID + id}`);
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
            <Breadcrambs mainRoute={"promotion"} main={"Акции"} current={business.name}/>
            {isLoading ? (
                isMobile ? <SkeletonPromotionPageMedia/> : <SkeletonPromotionPage/> 
            ) : (
            <>
                <article className="businessPage">
                    <div className="businessPage__firstLine"> 
                        <div className="businessPage__firstLine-textBox">
                            <h3 className="businessPage__title">{getValueOrDefault(business.name, 'Название не указано')}</h3>
                            <div className="businessPage__text-box">
                                <span className="businessPage__text businessPage__text_gray">Действует по: </span>
                                <span className="businessPage__text">{getValueOrDefault(formatDate(business.activeToDate), "Дата не указана")}</span>
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
                                    <Link to="map" smooth={true}>
                                        <button className="businessPage__button">
                                                <img src={addressIcon} alt="" />
                                        </button>
                                    </Link>
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
        </section>
  )
}
