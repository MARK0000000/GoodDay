import React, {useContext} from 'react'
import instagram from '../../images/icons/instagram-outline.svg'
import tiktok from '../../images/icons/tiktok.svg'
import youtube from '../../images/icons/youtube.svg'
import googlePlay from '../../images/icons/googleplay.svg'
import appstore from '../../images/icons/appstore.svg'
import qrCode from '../../images/icons/qr.svg'
import { NavigateContext } from '../../context/Navigate';

export default function Footer() {
  const {handleNavigate, activeButton} = useContext(NavigateContext)

  return (
    <footer className='footer'>
      <div className="footer__content container">
        <div className="footer__contactUs">
          <span className='footer__contactUs-text'>
            <sup style={{verticalAlign: 'bottom'}}>+</sup>
            375 33 
            <sup style={{verticalAlign: 'bottom'}}> 694-96-38</sup>
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
            <a onClick={() => handleNavigate('aboutcompany', 'aboutcompany')}>О компании</a>
            <a onClick={() => handleNavigate('cooperation', 'cooperation')}>Сотрудничество</a>
            <a onClick={() => handleNavigate('blog', 'blog')}>Блог</a>
          </div>
          <div className="footer__item">
            <span>ПОЛЬЗОВАТЕЛЯМ</span>
            <hr />
            <a onClick={() => handleNavigate('questions', 'questions')}>Вопросы и ответы</a>
            <a onClick={() => handleNavigate('invite', 'invite')}>Пригласить друга</a>
          </div>
          <div className="footer__item">
            <span>ПАРТНЕРАМ</span>
            <hr />
            <a onClick={() => handleNavigate('partnership', 'partnership')}>Для вашего бизнеса</a>
            <a onClick={() => handleNavigate('franchise', 'franchise')}>Франчайзинг</a>
            <a onClick={() => handleNavigate('allstock', 'allstock')}>Все акции</a>
          </div>
        </div>
      </div>
      <hr  className='footer__hr'/>
      <div className='footer__underLine container'>
        <div className="footer__item footer__item_underLine">
          <span>&copy; 202<span className='footer__bigLetter'>4</span> Good Day</span>
          <a href="">Обработка персональных данных</a>
          <a href="">Пользовательское соглашение</a>
          <a href="">Публичная оферта</a>
        </div>
        <div className="footer__item footer__item_underLine">
          <span>Гарантия, поддержка <br /> 2<span className='footer__bigLetter'>4</span> часа возврата средств</span>
        </div>
        <div className="footer__social">
          <button className="footer__social-btn">
            <a href="https://instagram.com/good_day_info/" target="_blank">
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
