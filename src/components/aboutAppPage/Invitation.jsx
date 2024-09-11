import React from 'react'
import GDwhite from '../../images/other/gd3d1.png'

export default function Invitation() {
  return (
    <section className='invitation'>
        <div className="invitation__block invitation__block_img_1">
            <span className="invitation__span">Красота</span>
        </div>
        <div className="invitation__block invitation__block_img_2">
            <span className="invitation__span">Развлечения</span>
        </div>
        <div className="invitation__block invitation__block_text">
            <h3 className="invitation__title">Заходи в Good Day чаще!</h3>
            <p className="invitation__paragrath">
                Каталог самых интересных 
                предложений и новых 
                компаний партнёров 
                обновлятся каждый день 
            </p>
        </div>
        <div className="invitation__block invitation__block_img_3">
            <span className="invitation__span">Магазины</span>
        </div>
        <div className="invitation__block invitation__block_img_4">
            <span className="invitation__span">Рестораны и кафе</span>
        </div>
        <div className="invitation__block invitation__block_blue">
            <span className="invitation__span">И многое <br /> другое</span>
            <img src={GDwhite} alt="" className="invitation__img" />
        </div>
    </section>
)
}
