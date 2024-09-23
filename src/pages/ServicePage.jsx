import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/main/Breadcrambs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import sendMassageIcon from '../images/icons/sendMassageIcon.svg'
import serviceExample from '../images/other/serviceExample.png'
import instaSmall from '../images/icons/instagramSmall.svg'
import vkSmall from '../images/icons/vkSmall.svg'
import MyMapSmall from '../components/servicePage/MyMapSmall';
import ServiceList from '../components/servicePage/ServiceList';
import ServiceExamples from '../components/servicePage/ServiceExamples';
import ServiceDescription from '../components/servicePage/ServiceDescription';
import useEndpoints from '../api/apiConfig';
import { fetchGet } from '../api/fetch';
import { getValueOrDefault } from '../utils/getValueOrDefault';
import WorkTimeModal from '../components/servicePage/WorkTimeModal';
import { handleNavigateSocial } from '../utils/navigateSocial';
import { SkeletonServicePage } from '../components/UI/loaders/SkeletonServicePage';
import { SkeletonServicePageMedia } from '../components/UI/loaders/SkeletonServicePageMedia';
export default function ServicePage() {
    const endpoints = useEndpoints()
    const {id} = useParams();
    const [service, setService] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [workTimeModalActive, setWorkTimeModalActive] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const changeWorkTimeModalActive = () => {
        if (workTimeModalActive == true) {
            setWorkTimeModalActive(false)
        } else {
            setWorkTimeModalActive(true)
        }
    }
    useEffect(() => {
        async function getData() {
            const data = await fetchGet(`${endpoints.SERVICEBYID}${id}`);
            if (data) {
                setService(data)
                setIsLoading(false)
            }
        }
        getData()
    }, [id])
  return (
    <>
    <BreadCrumbs current={getValueOrDefault(service.name, "Название не указанно")}/>
    {isLoading ?
        isMobile ? <SkeletonServicePageMedia/> : <SkeletonServicePage/> 
    :
    <>
        <div className="serviceContent">
            <div className="serviceContent__img-box">
            <Swiper
                style={{width: '100%', height: '100%'}}
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
                {service.images[0] && service.images.map((item, index) => 
                    <SwiperSlide  key={index}  style={{width: '100%', height: '100%'}}>
                            <img src={endpoints.UPLOADS + item.url} alt="" className="serviceContent__img" />
                    </SwiperSlide>
                )}
            </Swiper>
            </div>
            <article className="serviceContent__content">
                <div className="serviceContent__firstLine">
                    <img src={endpoints.UPLOADS + service.images[0].url} alt="" className="serviceContent__imgSmall" />
                    <div>
                        <h2 className='serviceContent__title'>{getValueOrDefault(service.name, "Название не указанно")}</h2>
                        {service.address &&
                            <span className="serviceContent__address">{getValueOrDefault(service.address, 'Адрес не указан')}</span>
                        }
                    </div>
                </div>
                <div className="serviceContent__body">
                    {service.phone &&
                        <span className="serviceContent__phone">{getValueOrDefault(service.phone, "Телефон не указан")}</span>
                    }
                    {service.workTime &&
                        <>
                            <span 
                                className={`serviceContent__workTime ${service.workTime != "По предварительной записи" && 'serviceContent__workTime_list'} ${(workTimeModalActive && service.workTime != "По предварительной записи") && 'serviceContent__workTime_list_active'}`}
                                onClick={() => changeWorkTimeModalActive()}
                                >
                                    {getValueOrDefault(service.workTime, "Время не указано")}
                            </span>
                            {service.workTime != "По предварительной записи" &&
                                <WorkTimeModal workTimeDetailed={service.workTimeDetailed} workTimeModalActive={workTimeModalActive}/>
                            }
                        </>
                    }
                    <div className="serviceContent__socialBox">
                        {service.instagramLink && 
                            <button className="serviceContent__social">
                                <a onClick={() => handleNavigateSocial('instagram', `${service.instagramLink}`)}>
                                    <img src={instaSmall} alt="" />
                                </a>
                            </button>
                        } 
                        {service.vkLink && 
                            <button className="serviceContent__social">
                                <a onClick={() => handleNavigateSocial('vk', `${service.vkLink}`)}>
                                    <img src={vkSmall} alt="" />
                                </a>
                            </button>
                        }
                    </div>
                </div>
                <div className="serviceContent__bottom">
                    <div className="serviceContent__ratingBox">
                    </div>
                    <div className="serviceContent__buttons">
                        <button className="serviceContent__buttonSendMassage">
                            <a onClick={() => handleNavigateSocial( `${ (service.services[0] && service.services[0].link) ? 'serviceLink' : 'instagram'}` , `${(service.services[0] && service.services[0].link) || service.instagramLink}`)}>
                                <img src={sendMassageIcon} alt="" />
                            </a>
                        </button>
                        <button className="serviceContent__button">
                            <a onClick={() => handleNavigateSocial( `${(service.services[0] && service.services[0].link) ? 'serviceLink' : 'instagram'}` , `${(service.services[0] && service.services[0].link) || service.instagramLink}`)}>
                                Записаться
                            </a>
                        </button>
                    </div>
                </div>
            </article>
        </div>
        <div className='serviceContent__info'> 
            <ServiceDescription service={service}/>
            <MyMapSmall data={service}/>
        </div>
        <ServiceList data={service.services} link={service.instagramLink}/>
        {/* <ServiceExamples/> */}
    </>
    }
    </>
  )
}

                        {/* rating */}
                        {/* <span className="serviceContent__ratingCount"></span>
                        <div>
                            <div className="serviceContent__stars">

                            </div>
                            <span className="serviceContent__countOfRatings">

                            </span>
                        </div> */}
