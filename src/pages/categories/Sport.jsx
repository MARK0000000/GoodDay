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
import { usePagination } from '../../context/PaginationContext'

export default function Sport() {
  const endpoints = useEndpoints();
  const { data } = useContext(SearchContext);
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage] = useState(9);
  const [totalCount, setTotalCount] = useState();
  const {city, updateCity, cities, cityName} = useContext(CityContext)

  const { paginationState, updatePage, updateCurrentPageNumbers } = usePagination(); 
  const currentPage = paginationState.sportPage; 
  const currentPageNumbers = paginationState.sportCurrentPageNumbers;
  
  const [previousData, setPreviousData] = useState(null);
  
  useEffect(() => {
    if (data && data.data) {
      if (previousData !== data.data) {
        updatePage('sportPage', 1);
        updateCurrentPageNumbers('sport', []);
        setPreviousData(data.data) 
      }
      
      const slicedData = data.data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
      setBusinesses(slicedData);
      setIsLoading(false);
      setTotalCount(data.totalCount);

    } else {
      const fetchData = async () => {
        setIsLoading(true);
        const result = await fetchGetCategory(`${endpoints.SPORT}&pageNumber=${currentPage}&pageSize=${itemsPerPage}`);
        if (result) {
          setBusinesses(result.data);
          setIsLoading(false);
          setTotalCount(result.totalCount);
          if (previousData !== null) {
            updatePage('sportPage', 1);
            updateCurrentPageNumbers('sport', []);
            setPreviousData(null) 
          }    
        }
      };
      fetchData();
    }
  }, [currentPage, data, city]);

  return (
    <>
      <Add />
      <section className="content">
        <div className="content__title-box" id='content'>
          <h1 className="content__title">
            Спорт в <span className="content__city">{cityName}</span>
            <span className="content__count">{totalCount}</span>
          </h1>
        </div>
        {isLoading ?
          <div className='content__loading'>
            {[...Array(9)].map((_, index) => <SkeletonContent key={index} />)}
          </div>
          :
          <Content 
            businesses={businesses} 
            itemsPerPage={itemsPerPage} 
            currentPage={currentPage} 
            setCurrentPage={(page) => { updatePage('sportPage', page); }} 
            totalCount={totalCount}
            currentPageNumbers={currentPageNumbers}
            updateCurrentPageNumbers={(numbers) => updateCurrentPageNumbers('sport', numbers)}
            searchData={previousData}
          />
        }
      </section>
      <InfoMobileApp />
      <Info />
    </>
  );
}