import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import addressIcon from '../images/icons/share-map.svg.svg'
import telIcon from '../images/icons/quick-call.svg.svg'
import internetIcon from '../images/icons/quick-globe.svg.svg'
import { fetchGet } from '../api/fetch';
import useEndpoints from '../api/apiConfig';
import { Link } from 'react-scroll';
import { getWorkTimeStatus } from '../utils/workTimeDetailed';
import { getValueOrDefault } from '../utils/getValueOrDefault';
import Breadcrambs from '../components/main/Breadcrambs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { SkeletonDiscountPage } from '../components/UI/loaders/SkeletonDiscountPage'
import { SkeletonDiscountPageMedia } from '../components/UI/loaders/SkeletonDiscountPageMedia' 
import { handleNavigateSocial } from '../utils/navigateSocial';
import MyMap from '../components/businessPage/MyMap';
import ShareWidget from '../components/businessPage/ShareWidget';
import ContactsWidget from '../components/businessPage/ContactsWidget';
import AboutDiscount from '../components/businessPage/AboutDiscount';
import AboutPromoCode from '../components/businessPage/AboutPromoCode';

export default function DiscountPage() {
    const endpoints = useEndpoints();
    const [isMobile] = useState(window.innerWidth < 768);
    const {id} = useParams();
    const [business, setBusiness] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const [status, setStatus] = useState('Закрыто');
    
    useEffect(() => {
      async function getData() {
        const data = await fetchGet(`${endpoints.DISCOUNT_BY_ID + id} `);
        if (data && data !== Promise) {
            setBusiness(data);
            setStatus(getWorkTimeStatus(data.workTimeDetailed));
            setIsLoading(false);            
        }
    }
    getData();
    }, [endpoints.DISCOUNT_BY_ID, id]);
    
    const extractFirstWebLink = (webLinks) => {
        if (!webLinks || webLinks.length === 0) return null; 

        let linksArray;
        try {
            linksArray = JSON.parse(webLinks); 
        } catch (error) {
            console.error("Invalid JSON format:", error);
            return null;
        }

        if (!Array.isArray(linksArray) || linksArray.length === 0) return null; 

        const firstLink = linksArray[0].replace(/^==>\s*/, ''); 
        return firstLink;
    };
    const firstWebLink = extractFirstWebLink(business.webLinks);

    const removeLeadingSymbols = (str) => {
        return str ? str.replace(/^==>\s*/, '') : str;
    };
    return (
        <section>
            <Breadcrambs mainRoute={"discounts"} main={"Скидки"} current={business.name}/>
            {isLoading ? (
                isMobile ? <SkeletonDiscountPageMedia/> : <SkeletonDiscountPage/> 
            ) : (
            <>
                <article className="discountPage">
                    <div className="discountPage__content">
                        <div className="discountPage__img-box">
                                {business.discount &&
                                        <span className='discountPage__stock'>{getValueOrDefault(business.discount, 'Скидка не указана')}</span>
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
                                            <img src={endpoints.UPLOADS + item.url} alt="" className="discountPage__img"/>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                        </div>
                        <div className="discountPage__info"> 
                            <div className="discountPage__info-textBox">
                                <h3 className="discountPage__title">{getValueOrDefault(business.name, 'Название не указано')}</h3>
                                {business.shortDescription &&
                                    <p className="discountPage__shortDescription">{business.shortDescription}</p>
                                }
                                <div className="discountPage__descriptionBlock">
                                    <h4 className="discountPage__descriptionTitle">Описание</h4>
                                    <p className="discountPage__description">{getValueOrDefault(business.description, 'Описание не указано')}</p>
                                </div>
                            </div>
                            <div className="discountPage__info-btnBox">
                                {business.phones.length > 0 &&
                                    <button className="discountPage__button">
                                        <a href={`tel:${removeLeadingSymbols(business.phones[0].phone)}`} >
                                            <img src={telIcon} alt="" />
                                        </a>
                                    </button>
                                }
                                {firstWebLink &&
                                    <button className="discountPage__button">
                                        <a onClick={() => handleNavigateSocial('web', `${firstWebLink}`)}>
                                            <img src={internetIcon} alt="" />
                                        </a>
                                    </button>
                                }
                                {business.address[0] &&
                                        <Link to="map" smooth={true}>
                                            <button className="discountPage__button">
                                                    <img src={addressIcon} alt="" />
                                            </button>
                                        </Link>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="discountPage__widgets">
                        {business.discountRules &&
                            <AboutDiscount business={business}/>
                        }
                        {business.isPromoCode &&
                            <AboutPromoCode business={business}/>
                        }
                        <div className='discountPage__widgetsRight'>
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
