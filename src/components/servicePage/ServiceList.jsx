import React, { useState } from 'react'
import serviceItemImg from '../../images/icons/serviceIcon.png'
import { handleNavigateSocial } from '../../utils/navigateSocial'

export default function ServiceList({data, link}) {
    const [services] = useState(data)

  return (
    <section className="serviceList">
        <h3 className="serviceList__title">Услуги <span>{services.length}</span></h3>
        <div className="serviceList__content">
            {services.map((item, index) => 
            <div className="serviceList__item" key={index}>
                <div className="serviceList__left">
                    <img src={serviceItemImg} alt="" />
                    <div>
                        <h4 className="serviceList__item-title">{item.name}</h4>
                        <span className="serviceList__description">{item.description}</span>
                    </div>
                </div>
                <div className="serviceList__right">
                    <span className="serviceList__price">{item.price} BYN</span>
                    <span className="serviceList__time">{item.duration} м</span>
                    <button className="serviceList__item-button" onClick={() => handleNavigateSocial( `${ (data[0] && data[0].link) ? 'serviceLink' : 'instagram'}` , `${(data[0] && data[0].link) || link}`)}>
                            Записаться
                    </button>
                </div>
            </div>
            )}
        </div>
    </section>
  )
}
