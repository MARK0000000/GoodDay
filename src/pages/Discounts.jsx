import React, {useEffect, useState} from 'react'
import Add from '../componenets/Add'
import Content from '../componenets/Content'
import InfoMobileApp from '../componenets/InfoMobileApp'
import Info from '../componenets/Info'
import { fetchGet } from '../api/fetch'
import endpoints from '../api/apiConfig'

export default function Discounts() {
  const [businesses, setBusinesses] = useState([])

  useEffect(() => {
    console.log('discounts page')
    const fetchData = async () => {
        const me = await fetchGet(endpoints.USER_ME);
        me && console.log(me);
        const data = await fetchGet(endpoints.DISCOUNTSBUSINESS)
        if (data) {
          setBusinesses(data)
          setIsLoading(false)
          console.log(data)
        }
    };
    fetchData();
  }, []);

    const [isLoading, setIsLoading] = useState(true)


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
        <Content businesses={businesses} isLoading={isLoading}/>
      </section>
      <InfoMobileApp/>
      <Info/>
    </>
  )
}
