import Add from '../../components/page/Add'
import Content from '../../components/page/Content'
import InfoMobileApp from '../../components/page/InfoMobileApp'
import Info from '../../components/page/Info'
import { fetchGet } from '../../api/fetch'
import endpoints from '../../api/apiConfig'
import React, {useEffect, useState} from 'react'

export default function Other() {
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGet(endpoints.OTHERBUSINESS);
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
      <Add />
      <section className="content">
        <div className="content__title-box">
          <h1 className="content__title">
            Прочее в <span className="content__city">Полоцке</span>
            <span className="content__count">{businesses.length}</span>
          </h1>
          <button className="content__viewMapBtn">посмотреть на карте</button>
        </div>
          <Content businesses={businesses} isLoading={isLoading} />
      </section>
      <InfoMobileApp />
      <Info />
    </>
  );
}
