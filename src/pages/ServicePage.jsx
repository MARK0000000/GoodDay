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
import { handleNavigateSocial } from '../utils/navigateSocial';
export default function ServicePage() {
    const endpoints = useEndpoints()
    const {id} = useParams();
    const [service, setService] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            const data = await fetchGet(`${endpoints.SERVICEBYID}${id}`);
            if (data) {
                console.log(data)
                setService(data)
                setIsLoading(false)
            }
        }
        getData()
    }, [id])
      
  return (
    <>
    {isLoading ?
    <div></div>
    :
    <>
        <BreadCrumbs current={getValueOrDefault(service.name, "Название не указанно")}/>
        <div className="serviceContent">
            <div className="serviceContent__img-box">
            <Swiper
                style={{height: '340px'}}
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
                    <SwiperSlide  key={index} >
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
                        {service.address[0] &&
                            <span className="serviceContent__address">{getValueOrDefault(service.address[0].description, 'Адрес не указан')}</span>
                        }
                    </div>
                </div>
                <div className="serviceContent__body">
                    {service.phone &&
                        <span className="serviceContent__phone">{getValueOrDefault(service.phone, "Телефон не указан")}</span>
                    }
                    {service.workTime &&
                        <span className="serviceContent__workTime">{getValueOrDefault(service.workTime, "Время не указано")}</span>
                    }
                    <div className="serviceContent__socialBox">
                        <button className="serviceContent__social">
                            <img src={instaSmall} alt="" />
                        </button>
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
                        <buttom className="serviceContent__buttonSendMassage">
                            <img src={sendMassageIcon} alt="" />
                        </buttom>
                        <buttom className="serviceContent__button">Записаться</buttom>
                    </div>
                </div>
            </article>
        </div>
        <div style={{marginTop: '50px', display: "flex", justifyContent: 'space-between'}}> 
            <ServiceDescription service={service}/>
            <MyMapSmall/>
        </div>
        {/* <ServiceList/>
        <ServiceExamples/> */}
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
