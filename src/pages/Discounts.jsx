import React, {useEffect} from 'react'
import Add from '../componenets/Add'
import Content from '../componenets/Content'
import InfoMobileApp from '../componenets/InfoMobileApp'
import Info from '../componenets/Info'
import { fetchGet } from '../APi/fetch'
import { fetchWithCookies } from '../APi/fetch'

export default function Discounts() {

  useEffect(() => {
    const fetchData = async () => {
        const me = await fetchGet('https://api-gd.sava.site/user/me');
        me && console.log(me);

        const businessData = await fetchGet('https://jsonplaceholder.typicode.com/posts');
        businessData && console.log(businessData);
    };
    fetchData();
  }, []);

//https://api-gd.sava.site/business?categoryId=4&isServices=false&isInfo=false
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
