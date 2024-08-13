import React, {useEffect, useState} from 'react'
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

export default function ServicePage() {

    const [service, setService] = useState([
        {},
        {},
        {},
    ])
      
  return (
    <>
    <BreadCrumbs current={"Салон Good Day"} prev={"Услуги"} prevLink={'../../services'}/>
    <div className="serviceContent">
        <div className="serviceContent__img-box">
        <Swiper
            //className='add_container'
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

            {service.map((item, index) => 
                <SwiperSlide  key={index} >
                    <img src={serviceExample} alt="" className="serviceContent__img" />
                </SwiperSlide>
            )}
        </Swiper>
        </div>
        <article className="serviceContent__content">
            <div className="serviceContent__firstLine">
                <img src="" alt="" className="serviceContent__imgSmall" />
                <div>
                    <h2 className='serviceContent__title'>Салон "Good Day"</h2>
                    <span className="serviceContent__address">Адрес</span>
                </div>
            </div>
            <div className="serviceContent__body">
                <span className="serviceContent__phone">+375 (29) 111-11-11</span>
                <span className="serviceContent__workTime">Пн-Вс: с9:00 до 21:00</span>
                <div className="serviceContent__socialBox">
                    <button className="serviceContent__social">
                        <img src={instaSmall} alt="" />
                    </button>
                    <button className="serviceContent__social">
                        <img src={vkSmall} alt="" />
                    </button>
                </div>
            </div>
            <div className="serviceContent__bottom">
                <div className="serviceContent__ratingBox">
                    {/* rating */}
                    {/* <span className="serviceContent__ratingCount"></span>
                    <div>
                        <div className="serviceContent__stars">

                        </div>
                        <span className="serviceContent__countOfRatings">

                        </span>
                    </div> */}
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
        <ServiceDescription/>
        <MyMapSmall/>
    </div>
    <ServiceList/>
    <ServiceExamples/>
    </>
  )
}
