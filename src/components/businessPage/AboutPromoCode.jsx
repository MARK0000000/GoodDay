// AboutPromoCode.js
import React from 'react';
import { formatDate } from '../../utils/formatDate';
import { getValueOrDefault } from '../../utils/getValueOrDefault';
import PromoCodeModal from './PromoCodeModal'; 
import { Fancybox } from '@fancyapps/ui';
import ReactDOM from 'react-dom';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export default function AboutPromoCode({ business }) {
  const handleGetPromoCode = () => {

    const modalContainer = document.createElement('div');

    Fancybox.show([
      {
        src: modalContainer,
        type: 'html', 
        opts: {
            hideClass: false, 
            hideScrollbar: false, 
            animationEffect: 'none', 
            transitionEffect: 'none', 
          },
      },
    ]);

    ReactDOM.render(<PromoCodeModal promoCodeRules={business.promoCodeRules} />, modalContainer);
  };

  return (
    <>
      <div className="widget">
        <h4 className="widget__title">Промокод</h4>
        <div className="widget__content">
          <div className="widget__text-box">
            <span className="widget__text widget__text_gray">Срок действия </span>
            <span className="widget__text">{getValueOrDefault(formatDate(business.promoCodeExpires), "Дата не указана")}</span>
          </div>
        </div>
        <span className="widget__text widget__text_gray">Условия</span>
        <span className="widget__conditions">{getValueOrDefault(business.promoCodeRules, "Условия не указаны")}</span>
        <button className="widget__promoCodeBtn" onClick={handleGetPromoCode}>
          Получить промокод
        </button>
      </div>
    </>
  );
}