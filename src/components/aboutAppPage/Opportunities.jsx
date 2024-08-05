import React from 'react'
import discountsSmall from '../../images/other/акцииискидки.png'
import mapSmall from '../../images/other/найти.png'
import telSmall from '../../images/other/онлайн-запись.png'

export default function Opportunities() {
  return (
    <section className='opportunities'>
        <h3 className="opportunities__title">Возможности Good Day</h3>
        <hr className="opportunities__hr" />
        <div className="opportunities__bloks">
            <div className="opportunities__block">
                <h4 className="opportunities__block-title">Акции и скидки</h4>
                <hr className="opportunities__block-hr" />
                <p className="opportunities__block-p">
                Мы постоянно обновляем список
                акций и скидок, чтобы жители
                города могли экономить на
                покупках различных товаров и
                услуг.
                </p>
                <img src={discountsSmall} alt="" className="opportunities__block-icon opportunities__block-icon_1" />
            </div>
            <div className="opportunities__block">
                <h4 className="opportunities__block-title">Онлайн запись</h4>
                <hr className="opportunities__block-hr" />
                <p className="opportunities__block-p">
                Клиенты самостоятельно могут
                выбрать мастера, услугу и
                подходящее время для записи,
                так как все специалисты ведут
                актуальное расписание.
                </p>
                <img src={telSmall} alt="" className="opportunities__block-icon opportunities__block-icon_2" />
            </div>
            <div className="opportunities__block opportunities__block_3">
                <h4 className="opportunities__block-title">Найти на карте и <br /> по категориям</h4>
                <hr className="opportunities__block-hr" />
                <p className="opportunities__block-p">
                Доступна карта, на которой <br />
                легко можно найти всех <br />
                партнеров мобильного <br />
                приложения поблизости. <br />
                А также все места города по <br />
                категориям
                </p>
                <img src={mapSmall} alt="" className="opportunities__block-icon opportunities__block-icon_3" />
            </div>
            <div className="opportunities__block opportunities__block_big">
                <h4 className="opportunities__block-title">Электронная карта лояльности</h4>
                <hr className="opportunities__block-hr" />
                <p className="opportunities__block-p">
                Многие партнеры для своих посетителей активируют «Карту
                лояльности», которая имеет определенное количество посещений,
                при достижении которых пользователи получают специальный бонус (скидка или подарок).
                </p>
            </div>
            <div className="opportunities__block opportunities__block_5">
                <h4 className="opportunities__block-title">Дисконтные карты</h4>
                <hr className="opportunities__block-hr" />
                <p className="opportunities__block-p">
                Приложение позволяет удобно
                и безопасно хранить все
                дисконтные карты в одном
                месте.
                </p>
            </div>
        </div>
    </section>
)
}
