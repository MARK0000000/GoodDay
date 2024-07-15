import React from 'react'
import Add from './Add'
import Content from './Content'
import InfoMobileApp from './InfoMobileApp'
import Info from './Info'

export default function Discounts() {
  return (
    <>
      <Add/>
      <section className='content'>
        <div className="content__title-box">
          <h1 className="content__title">Скидки в <span className="content__city">Полоцке</span>
          <span className="content__count">160</span>
          </h1>
          <button className="content__viewMapBtn">посмотреть на карте</button>
        </div>
        <Content/>
      </section>
      <InfoMobileApp/>
      <Info/>
    </>
  )
}
