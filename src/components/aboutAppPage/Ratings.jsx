import React from 'react'
import GDcircle  from '../../images/other/gdкруг.png'
import ratingsImg from '../../images/other/20000скачиваний.png'
import qr from '../../images/icons/qrBlack.svg'

export default function Ratings() {
    
  return (
    <div className='ratings'>
        <div className="ratings__block ratings__block_white">
        <span className="ratings__count">20 000 +</span>
        <p className="ratings__paragrath">
            человек уже выбрали Good Day и <br />
            покупают выгодно, скачивай и ты!
        </p>
        <img src={ratingsImg} alt="" className="ratings__img" />
        </div>
        <div className='ratings__block_second'>
            <div className="ratings__block ratings__block_transparent">
            <div className="ratings__rating">
                <span>4</span>
                <span>.</span>
                <span>8</span>
            </div>
            <span className="ratings__text">Рейтинг</span>
            <span className="ratings__text ratings__text_bottom">более 200 оценок</span>
            </div>
            <div className='ratings__block_qrAndLogo'>
                <div className="ratings__qr">
                    <span className="ratings__qr-text">Скачать!</span>
                    <img src={qr} alt="" className="ratings__qr-img" />
                </div>
                <img src={GDcircle} alt="" className="ratings__logo" />
            </div>
        </div>
    </div>
)
}
