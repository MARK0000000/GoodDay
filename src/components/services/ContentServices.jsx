import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router';
import useEndpoints from '../../api/apiConfig';
import { NavigateContext } from '../../context/Navigate';
import NothingFound from '../UI/loaders/NothingFound';
export default function ContentServices({totalCount, data, showMoreCards}) {
    const {handleNavigate} = useContext(NavigateContext)
    const endpoints = useEndpoints()
    const [cards, setCards] = useState([])
    
    useEffect(() => {
        setCards(data)
    }, [data])

    return (
        <>
        {cards.length == 0 ? (
            <NothingFound />
        ) : (
            <>
                <div className="service__container">
                    {cards.map((item, index) => 
                        <article className='service' key={index}>
                            {/* <div className="service__likeIcon-box">
                                <svg
                                    style={{cursor: 'pointer'}}
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
                            <div className="service__content">
                                <img onClick={() => handleNavigate(`services/${item.id}`, `services/${item.id}`)} src={item.images && item.images[0] ? (endpoints.UPLOADS + item.images[0].url) : ''} alt="" className="service__img" />
                                <div className="service__text">
                                    <h3 className="service__title">{item.name}</h3>
                                    <span className="service__address">{item.shortDescription || 'Описание не указано'}</span>
                                </div>
                            </div>
                                {/* rating count */}
                                {/* <span className="service__rating">{item.rating}({item.ratingCount})</span> */}
                            <button onClick={() => handleNavigate(`services/${item.id}`, `services/${item.id}`)} className="service__button">Подробнее</button>
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
