import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/main/Breadcrambs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import sendMassageIcon from '../images/icons/sendMassageIcon.svg'
import instaSmall from '../images/icons/instagramSmall.svg'
import vkSmall from '../images/icons/vkSmall.svg'
import ServiceList from '../components/servicePage/ServiceList';
import useEndpoints from '../api/apiConfig';
import { fetchGet } from '../api/fetch';
import { getValueOrDefault } from '../utils/getValueOrDefault';
import WorkTimeModal from '../components/servicePage/WorkTimeModal';
import { handleNavigateSocial } from '../utils/navigateSocial';
import { SkeletonServicePage } from '../components/UI/loaders/SkeletonServicePage';
import { SkeletonServicePageMedia } from '../components/UI/loaders/SkeletonServicePageMedia';

export default function ServicePage() {
    const endpoints = useEndpoints()
    const { id } = useParams();
    const [service, setService] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [workTimeModalActive, setWorkTimeModalActive] = useState(false)
    const [isMobile] = useState(window.innerWidth < 768);

    const changeWorkTimeModalActive = () => {
        if (workTimeModalActive === true) {
            setWorkTimeModalActive(false)
        } else {
            setWorkTimeModalActive(true)
        }
    }
    useEffect(() => {
        async function getData() {
            const data = await fetchGet(`${endpoints.SERVICE_BY_ID}${id}`);
            if (data) {
                setService(data)
                setIsLoading(false)
            }
        }
        getData()
    }, [id])

    return (
        <>
            <BreadCrumbs mainRoute={"services"} main={"Услуги"} current={getValueOrDefault(service.name, "Название не указанно")} />
            {isLoading ?
                isMobile ? <SkeletonServicePageMedia /> : <SkeletonServicePage />
                :
                <>
                    <div className="serviceContent">
                        <div className="serviceContent__img-box">
                            <Swiper
                                style={{ width: '100%', height: '100%' }}
                                spaceBetween={50}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination, Autoplay]}
                            >
                                {service.images.map((item, index) =>
                                    (service.images.length > 1 && index === 0) ? null : (
                                        <SwiperSlide key={index} style={{ width: '100%', height: '100%' }}>
                                            <img src={`${endpoints.UPLOADS}${item.url}`} alt="" className="serviceContent__img" />
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>
                        </div>
                        <article className="serviceContent__content">
                            <div className="serviceContent__firstLine">
                                <img src={endpoints.UPLOADS + service.images[0].url} alt="" className="serviceContent__imgSmall" />
                                <div>
                                    <h2 className='serviceContent__title'>{getValueOrDefault(service.name, "Название не указанно")}</h2>
                                    <p className='serviceContent__description'>{service.description}</p>
                                </div>
                            </div>
                            <div className="serviceContent__body">
                                {service.phone &&
                                    <span className="serviceContent__phone">{getValueOrDefault(service.phone, "Телефон не указан")}</span>
                                }
                                {service.workTime &&
                                    <>
                                        <span
                                            className={`serviceContent__workTime ${service.workTimeDetailed.length > 0 && 'serviceContent__workTime_list'} ${(workTimeModalActive && service.workTimeDetailed.length > 0) && 'serviceContent__workTime_list_active'}`}
                                            onClick={() => changeWorkTimeModalActive()}
                                        >
                                            {getValueOrDefault(service.workTime, "Время не указано")}
                                        </span>
                                        {service.workTimeDetailed.length > 0 &&
                                            <WorkTimeModal workTimeDetailed={service.workTimeDetailed} workTimeModalActive={workTimeModalActive} />
                                        }
                                    </>
                                }
                                {service.address &&
                                    <span className="serviceContent__address">{getValueOrDefault(service.address, 'Адрес не указан')}</span>
                                }
                                <div className="serviceContent__socialBox">
                                    {service.instagramLink &&
                                        <button className="serviceContent__social">
                                            <a href={handleNavigateSocial('instagram', `${service.instagramLink}`)} target='_blank' rel="noreferrer" >
                                                <img src={instaSmall} alt="" />
                                            </a>
                                        </button>
                                    }
                                    {service.vkLink &&
                                        <button className="serviceContent__social">
                                            <a href={handleNavigateSocial('vk', `${service.vkLink}`)} target='_blank' rel="noreferrer">
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
                                        <a href={handleNavigateSocial(`${(service.services[0] && service.services[0].link) ? 'serviceLink' : 'instagram'}`, `${(service.services[0] && service.services[0].link) || service.instagramLink}`)} target='_blank' rel="noreferrer">
                                            <img src={sendMassageIcon} alt="" />
                                        </a>
                                    </button>
                                    <button className="serviceContent__button" onClick={() => window.open(handleNavigateSocial(`${(service.services[0] && service.services[0].link) ? 'serviceLink' : 'instagram'}`, `${(service.services[0] && service.services[0].link) || service.instagramLink}`), '_blank')}>
                                        Записаться
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>
                    <ServiceList data={service.services} link={service.instagramLink} />
                </>
            }
        </>
    )
}
