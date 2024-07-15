import React from 'react'
import googlePlay from '../images/googleplay.svg'
import appstore from '../images/appstore.svg'
import qrCode from '../images/qr.svg'
import phone from '../images/phone.png'
export default function InfoMobileApp() {
  return (
    <section className='infoMobileApp__container'>
      <article className="infoMobileApp__content">
        <h2 className="infoMobileApp__title">Мобильное приложение Good Day</h2>
        <p className="infoMobileApp__text">Мы разработали удобные мобильные приложения для всех распространеных устройств. Теперь услуги, развлечения, кафе, <br /> рестораны и многое другое со скидками доступными для вас в любом месте. Удобный поиск по карте и вашему местоположению поможет экономить удобнее и быстрее!</p>
        <div className='infoMobileApp__buttons-box'>
          <button className="infoMobileApp__button ">
            <img src={googlePlay} alt="" className="infoMobileApp__button-img" />
          </button>
          <button className="infoMobileApp__button ">
            <img src={appstore} alt="" className="infoMobileApp__button-img" />
          </button>
          <button className="infoMobileApp__button infoMobileApp__button_big">
            <img src={qrCode} alt="" className="infoMobileApp__button-img" />
          </button>
        </div>
      </article>
      <img src={phone} alt="" className="infoMobileApp__img" />
    </section>
  )
}
