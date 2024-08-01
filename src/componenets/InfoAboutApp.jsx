import React from 'react'
import phone from '../images/other/phone.png'

export default function InfoAboutApp() {
  return (
    <section className='infoAboutApp__container'>
      <article className="infoAboutApp__content">
        <h2 className="infoAboutApp__title">Что такое Good Day?</h2>
        <p className="infoAboutApp__text">  
            Мы - мобильное приложение Good Day, которое позволяет экономить <br /> 
            всегда и везде! Экономия касается не только денег, но и времени. Секрет <br />
            нашего успеха наши партнеры. На данный момент, Good Day имеет <br /> 
            представительства более чем в 20 городах Беларуси и России и более <br />
            1600 партнеров, которые нам доверяют и помогают каждый день делать <br /> 
            наших клиентов чуть более счастливыми, чем вчера.
        </p>
        <button className="infoAboutApp__button">Презентация</button>
      </article>
      <img src={phone} alt="" className="infoAboutApp__img" />
    </section>
  )
}
