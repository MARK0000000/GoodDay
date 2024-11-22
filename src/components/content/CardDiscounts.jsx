import React, {useContext} from 'react'
import { useLocation } from 'react-router-dom';
import useEndpoints from '../../api/apiConfig'
import { formatDate } from '../../utils/formatDate';
import { getValueOrDefault } from '../../utils/getValueOrDefault';
import { getWorkTimeStatus } from '../../utils/workTimeDetailed';
import { getEndpoint } from '../../utils/workWithUrl';
import { NavigateContext } from '../../context/Navigate';
import { TypeOfDataContext } from '../../context/TypeOfData';
export default function CardDiscounts({item}) {
    const {handleNavigate} = useContext(NavigateContext)
    const endpoints = useEndpoints()
    const location = useLocation();
    const endpoint = getEndpoint(location)
    const {type} = useContext(TypeOfDataContext)

    const workTimeStatus = getWorkTimeStatus(item.workTimeDetailed);
    const isWorkTimeDetailedEmpty = Array.isArray(item.workTimeDetailed) && item.workTimeDetailed.length === 0;
    const isWorkTimeEmpty = !item.workTime || item.workTime.trim() === '';
  return (
    <article className="businessCard">
        <div className="businessCard__img-box">
            {item.discount &&
                <span className='businessCard__stock'>{item.discount}</span>
            }
            <img src={item.images && item.images[0] ? (endpoints.UPLOADS + item.images[0].url) : ''} alt="Изображение" className="businessCard__img" />
        </div>
        <div className="businessCard__content">
            <h3 className="businessCard__title">{getValueOrDefault(item.name, 'Название не указано')}</h3>
            {type !== "discounts" &&
                <div className="businessCard__text-box">
                    <span className="businessCard__text businessCard__text_gray">Действует по: </span>
                    <span className="businessCard__text">{getValueOrDefault(formatDate(item.activeToDate), "Дата не указана")}</span>
                </div>
            }
            <p className="businessCard__text  businessCard__text_p">{getValueOrDefault(item.shortDescription, 'Описание не указано')}</p>
            <div className="businessCard__text-box businessCard__text-box_vertical">
                {isWorkTimeEmpty ? null : (
                    <span className={`businessCard__text ${
                        isWorkTimeDetailedEmpty ? '' : 
                        workTimeStatus === 'Открыто' 
                            ? 'businessCard__text_open' 
                            : workTimeStatus.includes('Откроется через') 
                                ? 'businessCard__text_coming_soon' 
                                : 'businessCard__text_closed'
                    }`}>
                        {isWorkTimeDetailedEmpty ? item.workTime : getValueOrDefault(workTimeStatus, 'Статус не указан')}
                    </span>
                )}
            </div>
        </div>
        <hr className='businessCard__hr' />
        <div className="businessCard__bottom">
            <div>
            </div>
            <button className="businessCard__button" onClick={() => handleNavigate(`${endpoint}/${item.id}`, `${endpoint}/${item.id}`)}> <span>Посмотреть</span></button>
        </div>
    </article>
  )
}
