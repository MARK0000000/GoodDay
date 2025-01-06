import React from 'react'
import googlePlay from '../../images/icons/playmarket.svg'
import appgalery from '../../images/icons/appgalerry.svg'
import appstore from '../../images/icons/appstoree.svg'
import telHand from '../../images/other/телефонвруке.png'

export default function InfoAboutCompany() {
    const handleNavigate = () => {
        window.open('https://goodday.taplink.ws/', '_blank');
    }

    return (
        <div className='infoAboutCompany'>
            <div className="infoAboutCompany__block infoAboutCompany__block_white">
                <span className="infoAboutCompany__text_blue">GOOD DAY</span>
                <span className="infoAboutCompany__text">Экономь везде и всегда</span>
                <ul className="infoAboutCompany__list">
                    <li className="infoAboutCompany__list-item">Находи и применяй промокоды</li>
                    <li className="infoAboutCompany__list-item infoAboutCompany__list-item_big">Пользуйся уникальными скидками, акциями, <br /> <span>картой лояльности</span></li>
                    <li className="infoAboutCompany__list-item">Храни все свои дисконтные карты</li>
                </ul>
                <img src={telHand} alt="" className="infoAboutCompany__img_mobile" />
            </div>
            <div className="infoAboutCompany__block infoAboutCompany__block_blue">
                <img src={telHand} alt="" className="infoAboutCompany__img" />
            </div>
            <div className="infoAboutCompany__block infoAboutCompany__block_orange">
                <div className="infoAboutCompany__icons">
                    <span className="infoAboutCompany__text_white">Доступно в</span>
                    <a href="https://play.google.com/store/apps/details?id=by.goodday" target="_blank" rel="noreferrer" >
                        <img src={googlePlay} alt="" className="infoAboutCompany__icon" />
                    </a>
                    <a href="https://apps.apple.com/us/app/good-day-экономь-всегда/id1668241700" target="_blank" rel="noreferrer" >
                        <img src={appstore} alt="" className="infoAboutCompany__icon" />
                    </a>
                    <a href="https://appgallery.huawei.com/app/C107641983" target="_blank" rel="noreferrer" >
                        <img src={appgalery} alt="" className="infoAboutCompany__icon" />
                    </a>
                </div>
                <p className="infoAboutCompany__paragrath">Получай скидки от лучших заведений твоего города</p>
                <button className="infoAboutCompany__button" onClick={() => handleNavigate()}>
                    Скачать!
                </button>
            </div>
        </div>
    )
}
