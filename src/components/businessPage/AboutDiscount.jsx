import React from 'react'
import { formatDate } from '../../utils/formatDate';
import { getValueOrDefault } from '../../utils/getValueOrDefault';

export default function AboutDiscount({business}) {
  return (
    <>
    <div className="widget">
    <h4 className="widget__title">Скидка</h4>
    <span className="widget__text widget__text_gray">Условия</span>
    <span className="widget__conditions">{getValueOrDefault(business.discountRules, "Условия не указаны")}</span>
    </div>
    </>
)
}
