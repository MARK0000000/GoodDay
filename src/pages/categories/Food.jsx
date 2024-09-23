import React, {useEffect, useState, useContext} from 'react'
import Add from '../../components/categoryPage/Add'
import Content from '../../components/categoryPage/Content'
import InfoMobileApp from '../../components/categoryPage/InfoMobileApp'
import Info from '../../components/categoryPage/Info'
import useEndpoints from '../../api/apiConfig'
import { fetchGetCategory } from '../../api/fetch'
import { SkeletonContent } from '../../components/UI/loaders/SkeletonContent';
import { SearchContext } from '../../context/Search';
import { CityContext } from '../../context/City';

export default function Food() {
  const endpoints = useEndpoints();
  const { data } = useContext(SearchContext);
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState();
  const { city } = useContext(CityContext);

  useEffect(() => {
    if (data && data.data) { // Проверяем, есть ли данные в контексте
      const slicedData = data.data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
      setCurrentPage(1)
      setBusinesses(slicedData);
      setIsLoading(false);
      setTotalCount(data.totalCount);
    } else {
      const fetchData = async () => {
        setIsLoading(true);
        const result = await fetchGetCategory(`${endpoints.FOOD}&pageNumber=${currentPage}&pageSize=${itemsPerPage}`);
        if (result) {
          setBusinesses(result.data);
          setIsLoading(false);
          setTotalCount(result.totalCount);
        }
      };
      fetchData();
    }
  }, [currentPage, data, city]);

  return (
    <>
      <Add />
      <section className="content">
        <div className="content__title-box">
          <h1 className="content__title">
            Еда в <span className="content__city">{city === 1 ? "Полоцке" : "Новополоцке"}</span>
            <span className="content__count">{totalCount}</span>
          </h1>
          {/* <button className="content__viewMapBtn">посмотреть на карте</button> */}
          </div>
        {isLoading ?
          <div className='content__loading'>
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
          </div>
          :
          <Content businesses={businesses} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={totalCount}/>
        }
      </section>
      <InfoMobileApp />
      <Info />
    </>
  );
}
