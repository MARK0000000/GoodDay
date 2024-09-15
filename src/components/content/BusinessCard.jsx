import React, {useState, useContext} from 'react'
import { useLocation } from 'react-router-dom';
import exampleImg from '../../images/other/4k.jpg';
import useEndpoints from '../../api/apiConfig'

import { formatDate } from '../../utils/formatDate';
import { getValueOrDefault } from '../../utils/getValueOrDefault';
import { getWorkTimeStatus } from '../../utils/workTimeDetailed';
import { useNavigate } from 'react-router';
import { getEndpoint } from '../../utils/workWithUrl';
import { NavigateContext } from '../../context/Navigate';
export default function BusinessCard({item}) {
    const {handleNavigate} = useContext(NavigateContext)
    const endpoints = useEndpoints()
    const location = useLocation();
    const endpoint = getEndpoint(location)

  return (
    <article className="businessCard">
        <div className="businessCard__img-box">
            {item.discount &&
                <span className='businessCard__stock'>{item.discount}</span>
            }
            <img src={item.images && item.images[0] ? (endpoints.UPLOADS + item.images[0].url) : ''} alt="Изображение" className="businessCard__img" />
            {/* like icon */}
            {/* <div className="businessCard__likeIcon-box">
                <svg
                    style={{ cursor: 'pointer' }}
                    key={item.id}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="heart-icon"
                    onClick={() => handleHeartClick(index)}
                >
                    <path
                        d="M16.6875 3.75C14.7516 3.75 13.0566 4.5825 12 5.98969C10.9434 4.5825 9.24844 3.75 7.3125 3.75C5.77146 3.75174 4.29404 4.36468 3.20436 5.45436C2.11468 6.54404 1.50174 8.02146 1.5 9.5625C1.5 16.125 11.2303 21.4369 11.6447 21.6562C11.7539 21.715 11.876 21.7458 12 21.7458C12.124 21.7458 12.2461 21.715 12.3553 21.6562C12.7697 21.4369 22.5 16.125 22.5 9.5625C22.4983 8.02146 21.8853 6.54404 20.7956 5.45436C19.706 4.36468 18.2285 3.75174 16.6875 3.75Z"
                        stroke="#959595" strokeWidth="1.5"
                        fill={clickedIndexes.includes(index) ? '#959595' : 'white'}
                    />
                </svg>
            </div> */}
        </div>
        <div className="businessCard__content">
            <h3 className="businessCard__title">{getValueOrDefault(item.name, 'Название не указано')}</h3>
            <div className="businessCard__text-box">
                <span className="businessCard__text businessCard__text_gray">Действует по:</span>
                <span className="businessCard__text">{getValueOrDefault(formatDate(item.promoCodeExpires), "Дата не указана")}</span>
            </div>
            <p className="businessCard__text  businessCard__text_p">{getValueOrDefault(item.shortDescription, 'Описание не указано')}</p>
            <div className="businessCard__text-box businessCard__text-box_vertical">
                <span className="businessCard__text">Адрес: {getValueOrDefault(item.address[0] ? item.address[0].description : false, 'Адрес не указан')}</span>
                <span className={`businessCard__text ${
                    getWorkTimeStatus(item.workTimeDetailed) === 'Открыто' 
                        ? 'businessCard__text_open' 
                        : getWorkTimeStatus(item.workTimeDetailed).includes('Откроется через') 
                            ? 'businessCard__text_coming_soon' 
                            : 'businessCard__text_closed'
                }`}>
                    {getValueOrDefault(getWorkTimeStatus(item.workTimeDetailed), 'Статус не указан')}
                </span>
            </div>
        </div>
        <hr className='businessCard__hr' />
        <div className="businessCard__bottom">
            <div>
                {/* count of use &  count of comments*/}
                {/* <span className="businessCard__text_bottom businessCard__text_bottom_paid">{getValueOrDefault(item.buyCount, 0)}</span>
                <span className="businessCard__text_bottom businessCard__text_bottom_comments">{getValueOrDefault(item.commentsCount, 0)}</span> */}
            </div>
            <button className="businessCard__button" onClick={() => handleNavigate(`${endpoint == "promotion" ? `promotion/${item.businessId}`  :  `${endpoint}/${item.id}`}`, `${endpoint == "promotion" ? `promotion/${item.businessId}`  :  `${endpoint}/${item.id}`}`)}> <span>Посмотреть</span></button>
        </div>
    </article>
  )
}
