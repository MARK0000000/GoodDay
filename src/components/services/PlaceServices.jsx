import React, { useContext } from 'react'
import { NavigateContext } from '../../context/Navigate'
import phoneImg from '../../images/other/phoneuslugi.png'
export default function PlaceServices() {
    const { handleNavigate } = useContext(NavigateContext)

    return (
        <section className='placeServices__container'>
            <div className='placeServices'>
                <div className="placeServices__content">
                    <h3 className="placeServices__title"> Хотите размещать <br /> свои услуги в Good Day</h3>
                    <p className="placeServices__text">Good Day обеспечивает вам надёжную <br /> онлайн-запись, автоматизацию и <br /> продвижение</p>
                    <button onClick={() => handleNavigate('aboutapp', 'aboutapp')} className="placeServices__button">Подробнее о Good Day</button>
                </div>
                <img src={phoneImg} alt="" className="placeServices__img" />
            </div>
        </section>
    )
}
