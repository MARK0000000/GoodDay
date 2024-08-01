import React from 'react'
import googlePlay from '../images/icons/playmarket.svg'
import appgalery  from '../images/icons/appgalerry.svg'
import appstore  from '../images/icons/appstoree.svg'
import GDblue from '../images/other/gd3d.png'
import GDwhite from '../images/other/gd3d1.png'
import GDcircle  from '../images/other/gdкруг.png'
import discounts from '../images/other/skidki.png'
import discountsSmall from '../images/other/акцииискидки.png'
import mapSmall from '../images/other/найти.png'
import telSmall from '../images/other/онлайн-запись.png'
import tel from '../images/other/телефонgd.png'
import telHand from '../images/other/телефонвруке.png'
import ratingsImg from '../images/other/20000скачиваний.png'
import qr from '../images/icons/qrBlack.svg'

export default function AboutApp() {
  return (
    <>
      <div className='infoAboutCompany'>
        <div className="infoAboutCompany__block infoAboutCompany__block_white">
          <span className="infoAboutCompany__text_blue">GOOD DAY</span>
          <span className="infoAboutCompany__text">Экономь везде и всегда</span>
          <ul className="infoAboutCompany__list">
            <li className="infoAboutCompany__list-item">Находи и применяй промокоды</li>
            <li className="infoAboutCompany__list-item infoAboutCompany__list-item_big">Пользуйся уникальными скидками, акциями, <br /> <span>картой лояльности</span></li>
            <li className="infoAboutCompany__list-item">Храни все свои дисконтные карты</li>
          </ul>
        </div>
        <div className="infoAboutCompany__block infoAboutCompany__block_blue">
            <img src={telHand} alt="" className="infoAboutCompany__img" />
        </div>
        <div className="infoAboutCompany__block infoAboutCompany__block_orange">
            <div className="infoAboutCompany__icons">
              <span className="infoAboutCompany__text_white">Доступно в</span>
              <img src={googlePlay} alt="" className="infoAboutCompany__icon" />
              <img src={appstore} alt="" className="infoAboutCompany__icon" />
              <img src={appgalery} alt="" className="infoAboutCompany__icon" />
            </div>
            <p className="infoAboutCompany__paragrath">Получай скидки от лучших заведений твоего города</p>
            <button className="infoAboutCompany__button">Скачать!</button>
        </div>
      </div>
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
            <button className="howItWorks__button">Скачать!</button>
          </div>
        </div>
      </section>
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
            Каталог самых интересных <br />
            предложений и новых <br />
            компаний партнёров <br />
            обновлятся каждый день <br />
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
      <div className='ratings'>
        <div className="ratings__block ratings__block_white">
          <span className="ratings__count">20 000 +</span>
          <p className="ratings__paragrath">
            человек уже выбрали Good Day и <br />
            покупают выгодно, скачивай и ты!
          </p>
          <img src={ratingsImg} alt="" className="ratings__img" />
        </div>
        <div className="ratings__block ratings__block_transparent">
          <div className="ratings__rating">
            <span>4</span>
            <span>.</span>
            <span>8</span>
          </div>
          <span className="ratings__text">Рейтинг</span>
          <span className="ratings__text ratings__text_bottom">более 200 оценок</span>
        </div>
        <div className="ratings__qr">
          <span className="ratings__qr-text">Скачать!</span>
          <img src={qr} alt="" className="ratings__qr-img" />
        </div>
        <img src={GDcircle} alt="" className="ratings__logo" />
      </div>
      <section className='question'>
        <h3 className="question__title">Часто задаваемые воросы</h3>
          <details>
            <summary>Как зарегестрироватся в мобильном приложении Good day?</summary>
            <p>
              Скачайте приложение Good Day в App Store, Google Play или Huawei AppGallery. Затем пройдите простую процедуру регистрации и экономьте с удовольствием!
            </p>
          </details>
          <hr className="question__hr" />
          <details>
              <summary>Какие возможности бесплатного пользования приложением Good Day?</summary>
              <p>
                -Просмотр скидок и акций от партнёров <br />
                -Интерактивная карта вашего города со всеми бизнесами и их контактной информацией <br />
                -Электронная карта лояльности (открывает для вас дополнительные скидки и бонусы) <br />
                -Добавьте свои дисконтные карточки - экономьте время и место в кошельке <br />
                -Онлайн-запись позволяет вам ознакомиться с различными видами бьюти-процедур, специалистами и стоимостью их услуг. <br />
              </p>
          </details>
          <hr className="question__hr" />
          <details>
              <summary>Какие приемущества дает "активная" подписка?</summary>
              <p>
                Доступ к уникальным скидкам от партнеров и действующие промокоды              </p>
          </details>
          <hr className="question__hr" />
          <details>
              <summary>Сколько компаний в приложении Good Day?</summary>
              <p>
                На данный момент в Goo Day представлено более 1200 компаний самых популярных категорий товаров и услуг. Список новых компаний партнёров обновляется каждый день, поэтому, заходите в Good Day чаще!
              </p>
          </details>
          <hr className="question__hr" />
          <details>
              <summary>У меня остались вопросы, куда сообщить?</summary>
              <p>
                Если у вас есть вопросы, предложения или жалобы — напишите в нашу службу поддержки на почту <a href="email:support@good-day.by">support@good-day.by</a> . Мы всегда рады помочь и принять во внимание вашу обратную связь.
              </p>
          </details>
          <hr className="question__hr" />
      </section>
    </>
  )
}
