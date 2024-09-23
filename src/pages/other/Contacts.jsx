import React from 'react'
import tiktokIcon from '../../images/icons/tiktokWhite.svg'
import instaIcon from '../../images/icons/instagram-outlineWhite.svg'
export default function Contacts() {
  return (
    <section className='contacts'>
      <h2 className='contacts__title'>Контакты</h2>
      <div className="contacts__content">
        <div className="contacts__block">
          <h3 className="contacts__title">Служба поддержки</h3>
          <a href="mailto::support@good-day.by" target='_blank' className="contacts__link">support@good-day.by</a>
        </div>
        <div className="contacts__block">
        <h3 className="contacts__title">Вопросы и предложения по партнерству</h3>
          <a href="mailto::partners@good-day.by" target='_blank' className="contacts__link">partners@good-day.by</a>
          <p className="contacts__text">Подробная информация на сайте <a href="http://partners.good-day.by/" target="_blank" className="contacts__link">partners.good-day.by</a></p>
        </div>
      </div>
      <div className="contacts__block">
        <h3 className="contacts__title contacts__title_big">Новости, акции и специальные предложения от наших партнеров</h3>
        <div className="contacts__item">
          <button className="contacts__button">
              <a href="https://instagram.com/good_day_info/" target="_blank">
                <img src={instaIcon} alt="" className="contacts__img"/>
              </a>
            </button>
            <a href="https://instagram.com/good_day_info/" target="_blank" className="contacts__link">@good_day_info</a>
        </div>
        <div className="contacts__item">
          <button className="contacts__button">
              <a href="https://www.tiktok.com/@good_day_news_" target="_blank">
                <img src={tiktokIcon} alt="" className="contacts__img"/>
              </a>
            </button>
            <a href="https://www.tiktok.com/@good_day_news_" target="_blank" className="contacts__link">@good_day_news</a>
        </div>
      </div>
    </section>
  )
}
