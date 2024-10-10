import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import prev from '../../images/icons/prev.svg'
import next from '../../images/icons/next.svg'
import useEndpoints from '../../api/apiConfig';

export default function PostersInfo({ data }) {
  const swiperRef = useRef(null); 
  const endpoints = useEndpoints();

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); 
    }
  };
  console.log(`${endpoints.UPLOADS + data[0].image}`)
  return (
    <div className='postersInfo'>
      <Swiper
        ref={swiperRef} 
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={false} 
        modules={[Pagination, Autoplay]}
        slidesPerView={'auto'} 
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className='postersInfo__slide'
            style={{ width: '75%', height: 'auto', display: 'flex' }}
          >
            <div className='postersInfo__slideContainer'>
                <img src={`${endpoints.UPLOADS + item.image}`}  className='postersInfo__image' alt="" />
                <div className='postersInfo__descriptionBlock'>
                    <p className="postersInfo__description">{item.description}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        <button onClick={handlePrev} className="custom-button custom-button_prev">
            <img src={prev} alt="" className="custom-button_img_prev" />
        </button>
        <button onClick={handleNext} className="custom-button custom-button_next">
            <img src={next} alt="" className="custom-button_img_next" />
        </button>
    </div>
  );
}