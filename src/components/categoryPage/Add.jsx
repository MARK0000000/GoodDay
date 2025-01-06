import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import addImage from '../../images/add/рекламный баннер.png'
export default function Add() {

  return (
    <div className='add__container'>
      <Swiper
        className='add'
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
        <SwiperSlide
          className='add__slide'
          style={{ height: 'auto', display: 'flex', width: "100%" }}
        >
          <a href="https://goodday.taplink.ws/" target='_blank' rel='noreferrer'>
            <img src={addImage} className='add__image' alt="#" />
          </a>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}
