import React from 'react'
import { formatDate } from '../../utils/formatDate';
import { getValueOrDefault } from '../../utils/getValueOrDefault';

export default function AboutStock({ business }) {
    return (
        <>
            <div className="widget">
                <h4 className="widget__title">Об акции</h4>
                <div className="widget__content">
                    <div className="widget__text-box">
                        <span className="widget__text widget__text_gray">Срок действия </span>
                        <span className="widget__text">{getValueOrDefault(formatDate(business.activeToDate), "Дата не указана")}</span>
                    </div>
                    <div className="widget__text-box">
                        <span className="widget__text widget__text_gray">Описание </span>
                        <span className="widget__text">{getValueOrDefault(business.description, 'Описание не указано')}</span>
                    </div>
                </div>
                <span className="widget__text widget__text_gray">Успейте воспользоваться акцией до окончания времени действия</span>
            </div>
        </>
    )
}
