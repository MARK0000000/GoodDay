import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__content container">
        <div className="footer__contactUs">
          <span className='footer__contactUs-text'>
            <sup style={{verticalAlign: 'top'}}>+</sup>
            375 33 
            <sup style={{verticalAlign: 'top'}}> 111-11-11</sup>
          </span>
          <button className="footer__contactUs-btn">
            <a href="tel:" className="footer__tel">Связаться с нами</a>
          </button>
        </div>
        <div className="footer__item footer__item_apps">
          <span>МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</span>
          <hr/>
          <div className='footer__buttons-box'>
            <button className="footer__button "></button>
            <button className="footer__button "></button>
            <button className="footer__button footer__button_big"></button>
          </div>
        </div>
        <div className="footer__item">
          <span>КОМПАНИЯ</span>
          <hr />
          <a href="">О компании</a>
          <a href="">Сотрудничество</a>
          <a href="">Блог</a>
        </div>
        <div className="footer__item">
          <span>ПОЛЬЗОВАТЕЛЯМ</span>
          <hr />
          <a href="">Вопросы и ответы</a>
          <a href="">Пригласить друга</a>
        </div>
        <div className="footer__item">
          <span>ПАРТНЕРАМ</span>
          <hr />
          <a href="">Для вашего бизнеса</a>
          <a href="">Франчайзинг</a>
          <a href="">Все акции</a>
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
            <img src="" alt="" className="footer__social-img" />
          </button>
          <button className="footer__social-btn">
            <img src="" alt="" className="footer__social-img" />
          </button>
          <button className="footer__social-btn">
            <img src="" alt="" className="footer__social-img" />
          </button>
        </div>
      </div>
    </footer>
  )
}
