import React from 'react'
import discounts from '../../images/other/skidki.png'
import tel from '../../images/other/телефонgd.png'
import GDblue from '../../images/other/gd3d.png'

export default function HowItWorks() {
    const handleNavigate = () => {
        window.open('https://goodday.taplink.ws/', '_blank');
    }
  return (
    <section className='howItWorks'>
        <h3 className="howItWorks__title">Как это работает?</h3>
        <hr className="howItWorks__hr" />
        <div className="howItWorks__bloks">
            <div className="howItWorks__block howItWorks__block_blue">
                <span className="howItWorks__span">Шаг 1</span>
                <p className="howItWorks__paragrath">Выбирай заведение</p>
                <img src={GDblue} alt="" className="howItWorks__img" />
            </div>
            <div className="howItWorks__block howItWorks__block_white">
                <span className="howItWorks__span">Шаг 2</span>
                <p className="howItWorks__paragrath">Покажи свой уникальный <br /> номер с активной подпиской</p>
                <img src={tel} alt="" className="howItWorks__img" />
            </div>
            <div className="howItWorks__block howItWorks__block_orange">
                <span className="howItWorks__span">Шаг 3</span>
                <p className="howItWorks__paragrath">Получай скидку</p>
                <img src={discounts} alt="" className="howItWorks__img" />
                <button onClick={() => handleNavigate()} className="howItWorks__button">Скачать!</button>
            </div>
        </div>
    </section>
)
}
