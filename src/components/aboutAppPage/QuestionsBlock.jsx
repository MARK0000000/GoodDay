import React from 'react'


export default function QuestionsBlock() {
  return (
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
                Если у вас есть вопросы, предложения или жалобы — напишите в нашу службу поддержки на почту <a href="mailto::support@good-day.by" target='_blank'>support@good-day.by</a> . Мы всегда рады помочь и принять во внимание вашу обратную связь.
            </p>
        </details>
        <hr className="question__hr" />
    </section>
)
}
