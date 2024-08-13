import React from 'react'
import phone from '../../images/other/phone.png'

export default function BecomePartnes() {
  return (
    <div className="becomePartner">
    <img src={phone} alt="" className="becomePartner__img" />
    <div className="becomePartner__content">
        <span className="becomePartner__text becomePartner__text_bold">Good Day</span>
        <span className="becomePartner__text">для вашего бизнеса</span>
        <button className="becomePartner__button">Стать партнером</button>
    </div>
    </div>
  )
}
