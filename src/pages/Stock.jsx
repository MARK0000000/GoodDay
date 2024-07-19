import React from 'react'
import Add from '../componenets/Add'
import Content from '../componenets/Content'
import InfoMobileApp from '../componenets/InfoMobileApp'
import Info from '../componenets/Info'


export default function Stock() {
  return (
    <>
      <Add/>
      <section className='content'>
        <div className="content__title-box">
          <h1 className="content__title">Акции <span className="content__city">Полоцке</span>
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
