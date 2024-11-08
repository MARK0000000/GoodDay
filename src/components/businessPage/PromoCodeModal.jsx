// PromoCodeModal.js
import React from 'react';
import googlePlay from '../../images/icons/googleplayBlack.svg';
import appstore from '../../images/icons/appstoreBlack.svg';
import qrCode from '../../images/icons/qrBlack.svg';
import gdLogo from '../../images/other/gd3d.png';
import { Fancybox } from '@fancyapps/ui';

export default function PromoCodeModal({ promoCodeRules }) {
  const handleClose = () => {
    // Закрываем модальное окно
    Fancybox.close();
  };

  return (
    <div className='promoCodeModal'>
      <button className="promoCodeModal__close" onClick={handleClose} aria-label="Close">
        &times; 
      </button>
      <h4 className="promoCodeModal__title">Промокод</h4>
      <p className="promoCodeModal__text">{promoCodeRules}</p>
      <p className="promoCodeModal__text">Промокод вы найдете в нашем мобильном приложении</p>

      <div className='promoCodeModal__buttons-box'>
        <button className="promoCodeModal__button">
          <a href="https://play.google.com/store/apps/details?id=by.goodday" target='_blank' rel="noopener noreferrer">
            <img src={googlePlay} alt="" className="promoCodeModal__button-img" />
          </a>
        </button>
        <button className="promoCodeModal__button">
          <a href="https://apps.apple.com/us/app/good-day-экономь-всегда/id1668241700" target='_blank' rel="noopener noreferrer">
            <img src={appstore} alt="" className="promoCodeModal__button-img" />
          </a>
        </button>
        <button className="promoCodeModal__button promoCodeModal__button_big">
          <img src={qrCode} alt="" className="promoCodeModal__button-img" />
        </button>
      </div>

      <img src={gdLogo} alt="" className="promoCodeModal__img" />
    </div>
  );
}