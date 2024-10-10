import React, {useEffect, useState, useContext} from 'react'
import { useLocation, useParams } from 'react-router-dom';
import addressIcon from '../images/icons/share-map.svg.svg'
import telIcon from '../images/icons/quick-call.svg.svg'
import internetIcon from '../images/icons/quick-globe.svg.svg'
import { fetchGet } from '../api/fetch';
import useEndpoints from '../api/apiConfig';
import { Link, animateScroll as scroll } from 'react-scroll';
import { getValueOrDefault } from '../utils/getValueOrDefault';
import Breadcrambs from '../components/main/Breadcrambs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { SkeletonPosterPage } from '../components/UI/loaders/SkeletonPosterPage'
import { SkeletonPosterPageMedia } from '../components/UI/loaders/SkeletonPosterPageMedia' 
import ShareWidget from '../components/businessPage/ShareWidget';
import ContactsWidget from '../components/businessPage/ContactsWidget';
import InfoWidget from '../components/businessPage/InfoWidget';
import { handleNavigateSocial } from '../utils/navigateSocial';
import MyPosterMap from '../components/posterPage/MyPosterMap';
import { PosterCategoriesContext } from '../context/PosterCategories';

export default function BusinessPage() {
    const location = useLocation();
    
    const pathSegments = location.pathname.split('/'); 
    const endpoint = pathSegments.length >= 3 ? `${pathSegments[2]}` : ''; 
    console.log(endpoint)
    const { categories, selectedCategory } = useContext(PosterCategoriesContext);
    const category = categories.find(category => category.categoryRoute === endpoint)

    const [poster, setPoster] = useState([])
    const daysOfWeek = ['Восскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const monthNames = [
        'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
        'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ];

    const endpoints = useEndpoints();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const [links, setLinks] = useState()
    const [activeLink, setActiveLink] = useState('Описание'); 
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };  
    
    useEffect(() => {
      async function getposter() {
        const data = await fetchGet(`${endpoints.POSTERS_BY_ID}${id}`);
        if (data && data != Promise) {
            setPoster(data);
            setLinks([
                {
                title: 'Описание',
                body: data.posterDescription || "Описание не указанно",
                },
                {
                title: 'Расписание',
                link: data.webLinkTimetable,
                body: (
                    <div className="timetable">
                        {data.timetable.map((item, index) => {
                            const date = new Date(new Date().getFullYear(), item.month - 1, item.day);
                            const dayOfWeek = daysOfWeek[date.getDay()];
                            const monthName = monthNames[item.month - 1]; 
                            return (
                                <div key={index} className="timetable__item">
                                    <div className='timetable__dateBox'>
                                        <div className='timetable__dayMonth-box'>
                                            <span className="timetable__day">{item.day}</span>
                                            <span className="timetable__month">{monthName}</span>
                                        </div>
                                        <span className="timetable__dayOfWeek">{dayOfWeek}</span>
                                    </div>
                                    <div className="timetable__content">
                                        <div className='timetable__placeBox'>
                                            <span className="timetable__place">{data.venueName}</span>
                                            <span className="timetable__address">{data.address.description}</span>
                                        </div>
                                        <div className="timetable__timeBox">
                                            {item.time.map((item, index) =>
                                                <div key={index} className="timetable__timeItem">
                                                    <span className="timetable__time">{item.time}</span>
                                                    <span className="timetable__price">{item.price}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
        
                    </div>
                ),
                },
                {
                title: 'Адрес',
                body:data.address.description ||  "Адреса не указаны",
                },
            ])
            setActiveLink('Описание')     
            setIsLoading(false);            
        }
    }
    getposter();
    }, [id]);
    
    console.log(category)
    return (
        <section>
            {isLoading ? (
                isMobile ? <SkeletonPosterPageMedia/> : <SkeletonPosterPage/> 
            ) : (
            <>
                <Breadcrambs elements={ category && [{path: `/posters/${category.categoryRoute}`, text: category.categoryName}]} current={poster.posterName}/>
                <article className="businessPage">
                    <div className="businessPage__firstLine"> 
                        <div className="businessPage__firstLine-textBox">
                            <h3 className="businessPage__title">{getValueOrDefault(poster.posterName, 'Название не указано')}</h3>
                            <div className="businessPage__text-box">
                                {poster.categories.map((item, index) =>
                                    <span key={index} className="businessPage__text businessPage__text_gray">{item.categoryName} </span>
                                )}
                            </div>
                        </div>
                        <div className="businessPage__firstLine-btnBox">
                            {poster.phone &&
                                <button className="businessPage__button">
                                    <a href={`tel:${poster.phone}`} >
                                        <img src={telIcon} alt="" />
                                    </a>
                                </button>
                            }
                            {poster.webLink &&
                                <button className="businessPage__button">
                                    <a onClick={() => handleNavigateSocial('web', `${poster.webLink}`)}>
                                        <img src={internetIcon} alt="" />
                                    </a>
                                </button>
                            }
                            {poster.address &&
                                <button className="businessPage__button">
                                    <Link to="map" smooth={true}>
                                        <img src={addressIcon} alt="" />
                                    </Link>
                                </button>
                            }
                        </div>
                    </div>
                    <div className="businessPage__secondLine">
                        <p className="businessPage__text businessPage__text_p">{getValueOrDefault(poster.shortPosterDescription, 'Описание не указано')}</p>
                    </div>
                    <div className="businessPage__widgets">
                        <div className="businessPage__img-box">
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

                                    {poster.images.map((item, index) => 
                                        <SwiperSlide  key={index} >
                                            <img src={endpoints.UPLOADS + item.url} alt="" className="businessPage__img"/>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                        </div>
                        <InfoWidget links={links} activeLink={activeLink} handleLinkClick={handleLinkClick}/>
                        <div className='businessPage__widgetsRight'>
                            <ContactsWidget business={poster}/>
                            <ShareWidget/>
                        </div>
                    </div>
                </article>
                <MyPosterMap data={poster}/>
            </>
            )}
        </section>
  )
}
