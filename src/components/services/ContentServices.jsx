import React, { useEffect, useState, useContext } from 'react'
import useEndpoints from '../../api/apiConfig';
import { NavigateContext } from '../../context/Navigate';
import NothingFound from '../UI/loaders/NothingFound';
export default function ContentServices({totalCount, data, showMoreCards}) {
    const {typeButtonClick} = useContext(NavigateContext)
    const endpoints = useEndpoints()
    const [cards, setCards] = useState([])
    
    useEffect(() => {
        setCards(data)
    }, [data])

    return (
        <>
        {cards.length === 0 ? (
            <NothingFound />
        ) : (
            <>
                <div className="service__container">
                    {cards.map((item, index) => 
                        <article className='service' key={index}>
                            <div className="service__content">
                                <img onClick={() => typeButtonClick(`services/${item.id}`, `services/${item.id}`)} src={item.images && item.images[0] ? (endpoints.UPLOADS + item.images[0].url) : ''} alt="" className="service__img" />
                                <div className="service__text">
                                    <h3 className="service__title">{item.name}</h3>
                                    <span className="service__address">{item.shortDescription || 'Описание не указано'}</span>
                                </div>
                            </div>
                            <button onClick={() => typeButtonClick(`services/${item.id}`, `services/${item.id}`)} className="service__button">Подробнее</button>
                        </article>
                    )}        
                </div>
                {(cards.length >= 15 && cards.length < totalCount) &&
                    <button 
                        className="catalog__button"
                        onClick={showMoreCards}
                        >
                        Показать еще
                    </button>
                }
            </>
        )}
        </>
)
}
