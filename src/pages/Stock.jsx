import React, {useEffect, useState} from 'react'
import Add from '../components/general/Add'
import Content from '../components/Content'
import InfoMobileApp from '../components/general/InfoMobileApp'
import Info from '../components/general/Info'
import endpoints from '../api/apiConfig'
import { fetchGet } from '../api/fetch'


export default function Stock() {

  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGet(endpoints.DISCOUNTSBUSINESS);
      if (data) {
        setBusinesses(data);
        setIsLoading(false);
        console.log(data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Add/>
      <section className='content'>
        <div className="content__title-box">
          <h1 className="content__title">Акции <span className="content__city">Полоцке</span>
          <span className="content__count">{businesses.length}</span>
          </h1>
          <button className="content__viewMapBtn">посмотреть на карте</button>
        </div>
        {isLoading ?
          <div>Loading...</div>
          :
          <Content businesses={businesses} isLoading={isLoading} />
        }
      </section>
      <InfoMobileApp/>
      <Info/>

    </>
  )
}
