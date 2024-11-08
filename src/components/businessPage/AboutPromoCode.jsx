// AboutPromoCode.js
import React from 'react';
import { formatDate } from '../../utils/formatDate';
import { getValueOrDefault } from '../../utils/getValueOrDefault';
import PromoCodeModal from './PromoCodeModal'; // Импортируйте ваш модальный компонент
import { Fancybox } from '@fancyapps/ui';
import ReactDOM from 'react-dom';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export default function AboutPromoCode({ business }) {
  const handleGetPromoCode = () => {
    // Создаем элемент для рендеринга
    const modalContainer = document.createElement('div');

    // Открытие модального окна с помощью Fancybox
    Fancybox.show([
      {
        src: modalContainer,
        type: 'html', // Указываем тип как html
        opts: {
            hideClass: false, // Отключаем класс скрытия
            hideScrollbar: false, // Отключаем скрытие скроллбара
            animationEffect: 'none', // Отключаем анимацию
            transitionEffect: 'none', // Отключаем переходы
          },
      },
    ]);

    // Рендерим компонент PromoCodeModal в созданный контейнер
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