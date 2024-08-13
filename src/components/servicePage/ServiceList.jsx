import React from 'react'
import serviceItemImg from '../../images/other/serviceItem.png'

export default function ServiceList() {
  return (
    <section className="serviceList">
        <h3 className="serviceList__title">Услуги <span>67</span></h3>
        <div className="serviceList__content">
            <div className="serviceList__item">
                <div className="serviceList__left">
                    <img src={serviceItemImg} alt="" />
                    <div>
                        <h4 className="serviceList__item-title">Название услуги</h4>
                        <span className="serviceList__description">Краткое описание</span>
                    </div>
                </div>
                <div className="serviceList__right">
                    <span className="serviceList__price">100 BYN</span>
                    <span className="serviceList__time">2ч 30м</span>
                    <button className="serviceList__item-button">Записаться</button>
                </div>
            </div>
        </div>
        <button className="serviceList__button">Посмотреть всё</button>
    </section>
  )
}
