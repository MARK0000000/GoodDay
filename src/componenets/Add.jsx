import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Add() {
  return (
    <Swiper
      className='add_container'
      spaceBetween={50}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      loop={true}
      pagination={{
        clickable: false,
      }}
      modules={[Pagination, Autoplay]}
    >
      <SwiperSlide
        className='add__slide'
        style={{height: '100px', display: 'flex'}}
        >
        <span>Реклама</span>
      </SwiperSlide>
      <SwiperSlide
        className='add__slide'
        style={{height: '100px', display: 'flex'}}
        >
        <span>Реклама</span>
      </SwiperSlide>

    </Swiper>
  )
}
