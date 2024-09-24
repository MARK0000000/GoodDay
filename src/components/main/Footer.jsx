import React, {useContext} from 'react'
import instagram from '../../images/icons/instagram-outline.svg'
import tiktok from '../../images/icons/tiktok.svg'
import youtube from '../../images/icons/youtube.svg'
import googlePlay from '../../images/icons/googleplay.svg'
import appstore from '../../images/icons/appstore.svg'
import qrCode from '../../images/icons/qr.svg'
import { NavigateContext } from '../../context/Navigate';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const {handleNavigate, activeButton} = useContext(NavigateContext)

  
  return (
    <footer className='footer'>
      <div className="footer__content container">
        <div className="footer__contactUs">
          <span className='footer__contactUs-text'>
            +375 (33) 694-96-38
          </span>
          <button className="footer__contactUs-btn">
            <a href="tel:+375336949638" className="footer__tel">Связаться с нами</a>
          </button>
        </div>
        <div className="footer__item footer__item_apps">
          <span>МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</span>
          <hr/>
          <div className='footer__buttons-box'>
            <button className="footer__button ">
              <a href=" https://play.google.com/store/apps/details?id=by.goodday" target="_blank">
                <img src={googlePlay} alt="" className="footer__button-img" />
              </a>
            </button>
            <button className="footer__button ">
              <a href="https://apps.apple.com/us/app/good-day-экономь-всегда/id1668241700" target="_blank">
                <img src={appstore} alt="" className="footer__button-img" />
              </a>
            </button>
            <button className="footer__button footer__button_big">
              <img src={qrCode} alt="" className="footer__button-img" />
            </button>
          </div>
        </div>
        <div className='footer__pagesLinks'>
          <div className="footer__item">
            <span>КОМПАНИЯ</span>
            <hr />
            <a onClick={() => handleNavigate('aboutapp', 'aboutapp')}>О приложении</a>
            <a onClick={() => handleNavigate('contacts', 'contacts')}>Контакты</a>
          </div>
          <div className="footer__item">
            <span>ПОЛЬЗОВАТЕЛЯМ</span>
            <hr />
            <a onClick={() => handleNavigate('questions', 'questions')}>Вопросы и ответы</a>
            <a onClick={() => handleNavigate('cityDiscounts', 'cityDiscounts')}>Скидки города</a>
          </div>
          <div className="footer__item">
            <span>ПАРТНЕРАМ</span>
            <hr />
            <a onClick={() => handleNavigate('partnership', 'partnership')}>Для вашего бизнеса</a>
            <a href='http://partners.good-day.by/franshizabel' target='_blank'>Франчайзинг</a>
          </div>
        </div>
      </div>
      <hr  className='footer__hr'/>
      <div className='footer__underLine container'>
        <div className="footer__item footer__item_underLine">
          <span>&copy; 202<span className='footer__bigLetter'>4</span> Good Day</span>
          <a href="https://docs.google.com/document/d/1wyhH682ZA0xYQrs4vX89_EaHKBMZLQ_QMnY7ppavQUs/edit?usp=sharing" target='_blank'>Обработка персональных данных</a>
          <a href="https://docs.google.com/document/d/1CGd0r9m1pvsAJqrkru2kZ2NvB5fPO9XXILUI4okUP6Q/edit?usp=sharing" target='_blank'>Публичная оферта</a>
        </div>
        <div className="footer__item footer__item_underLine">
          <span>Гарантия, поддержка <br /> 2<span className='footer__bigLetter'>4</span> часа возврата средств</span>
        </div>
        <div className="footer__social">
          <button className="footer__social-btn">
            <a href="https://instagram.com/good_day_info/" target='_blank'>
              <img src={instagram} alt="" className="footer__social-img" />
            </a>
          </button>
          <button className="footer__social-btn">
            <a href="https://www.youtube.com/@good_day_news" target="_blank">
              <img src={youtube} alt="" className="footer__social-img" />
            </a>
          </button>
          <button className="footer__social-btn">
            <a href="https://www.tiktok.com/@good_day_news_" target="_blank">
              <img src={tiktok} alt="" className="footer__social-img" />
            </a>
          </button>
        </div>
      </div>
    </footer>
  )
}
