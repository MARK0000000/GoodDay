import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import addressIcon from '../images/icons/share-map.svg.svg'
import telIcon from '../images/icons/quick-call.svg.svg'
import internetIcon from '../images/icons/quick-globe.svg.svg'
import { fetchGet } from '../api/fetch';
import useEndpoints from '../api/apiConfig';
import { Link} from 'react-scroll';
import { getWorkTimeStatus } from '../utils/workTimeDetailed';
import { formatDate } from '../utils/formatDate';
import { getValueOrDefault } from '../utils/getValueOrDefault';
import Breadcrambs from '../components/main/Breadcrambs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { SkeletonPromotionPage } from '../components/UI/loaders/SkeletonPromotionPage'
import { SkeletonPromotionPageMedia } from '../components/UI/loaders/SkeletonPromotionPageMedia' 
import { handleNavigateSocial } from '../utils/navigateSocial';
import MyMap from '../components/businessPage/MyMap';
import ShareWidget from '../components/businessPage/ShareWidget';
import ContactsWidget from '../components/businessPage/ContactsWidget';
import AboutStock from '../components/businessPage/AboutStock';

export default function PromotionPage() {
    const endpoints = useEndpoints();
    const [isMobile] = useState(window.innerWidth < 768);
    const {id} = useParams();
    const [business, setBusiness] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const [status, setStatus] = useState('Закрыто');
    
    useEffect(() => {
      async function getData() {
        const data = await fetchGet(`${endpoints.PROMOTION_BY_ID + id}`);
        if (data && data !== Promise) {
            setBusiness(data);
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
                <article className="promotionPage">
                    <div className="promotionPage__firstLine"> 
                        <div className="promotionPage__firstLine-textBox">
                            <h3 className="promotionPage__title">{getValueOrDefault(business.name, 'Название не указано')}</h3>
                            <div className="promotionPage__text-box">
                                <span className="promotionPage__text promotionPage__text_gray">Действует по: </span>
                                <span className="promotionPage__text">{getValueOrDefault(formatDate(business.activeToDate), "Дата не указана")}</span>
                            </div>
                        </div>
                        <div className="promotionPage__firstLine-btnBox">
                            {business.phone &&
                                <button className="promotionPage__button">
                                    <a href={`tel:${business.phone}`} >
                                        <img src={telIcon} alt="" />
                                    </a>
                                </button>
                            }
                            {business.webLink &&
                                <button className="promotionPage__button">
                                    <a onClick={() => handleNavigateSocial('web', `${business.webLink}`)}>
                                        <img src={internetIcon} alt="" />
                                    </a>
                                </button>
                            }
                            {business.address[0] &&
                                    <Link to="map" smooth={true}>
                                        <button className="promotionPage__button">
                                                <img src={addressIcon} alt="" />
                                        </button>
                                    </Link>
                            }
                        </div>
                    </div>
                    <div className="promotionPage__secondLine">
                        <p className="promotionPage__text promotionPage__text_p">{getValueOrDefault(business.shortDescription, 'Описание не указано')}</p>
                    </div>
                    <div className="promotionPage__widgets">
                        <div className="promotionPage__img-box">
                            {business.discount &&
                                <span className='promotionPage__stock'>{getValueOrDefault(business.discount, 'Скидка не указана')}</span>
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
                                            <img src={endpoints.UPLOADS + item.url} alt="" className="promotionPage__img"/>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                        </div>
                        <AboutStock business={business}/>
                        <div className='promotionPage__widgetsRight'>
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
