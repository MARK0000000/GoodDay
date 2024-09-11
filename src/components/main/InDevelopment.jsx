import React, {useContext} from 'react'
import inDevelopmentImg from '../../images/other/inDevelopment.jpg'
import { NavigateContext } from '../../context/Navigate';
export default function InDevelopment() {
    const {handleNavigate} = useContext(NavigateContext)

  return (
    <section className='inDevelopment'>
        <img src={inDevelopmentImg} alt="#" className="inDevelopment__img"/>
        <h1 className="inDevelopment__title">Страница находится в разработке</h1>
        <button className="inDevelopment__btn"onClick={() => handleNavigate('discounts', 'discounts')}><span>Перейти на главную</span></button>
    </section>
  )
}
