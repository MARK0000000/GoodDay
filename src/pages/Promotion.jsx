import React, { useEffect, useState, useContext } from 'react';
import Add from '../components/categoryPage/Add';
import Content from '../components/categoryPage/Content';
import InfoMobileApp from '../components/categoryPage/InfoMobileApp';
import Info from '../components/categoryPage/Info';
import useEndpoints from '../api/apiConfig';
import { fetchGetWithCount } from '../api/fetch';
import { SkeletonContent } from '../components/UI/loaders/SkeletonContent';
import { CityContext } from '../context/City';
import { SearchContext } from '../context/Search';
import { usePagination } from '../context/PaginationContext'; 
import { CategoriesContext } from '../context/CategoriesContext';

export default function Promotion() {
  const endpoints = useEndpoints();
  const {promotionCategory} = useContext(CategoriesContext)

  const { data } = useContext(SearchContext);
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage] = useState(9);
  const [totalCount, setTotalCount] = useState();
  const { city, cities } = useContext(CityContext);
  const cityName = cities.find(item => item.id === city);
  
  const { paginationState, updatePage, updateCurrentPageNumbers } = usePagination(); 
  const currentPage = paginationState.promotionPage; 
  const currentPageNumbers = paginationState.promotionCurrentPageNumbers;
  
  const [previousData, setPreviousData] = useState(null);

  useEffect(() => {
    if (data && data.data) {
      if (previousData !== data.data) {
        updatePage('promotionPage', 1);
        updateCurrentPageNumbers('promotion', []);
        setPreviousData(data.data) 
      }
      
      const slicedData = data.data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
      setBusinesses(slicedData);
      setIsLoading(false);
      setTotalCount(data.totalCount);

    } else {
      const fetchData = async () => {
        setIsLoading(true);
        let result
        if (promotionCategory) {
          result = await fetchGetWithCount(`${endpoints.PROMOTION_CATEGORY}&pageNumber=${currentPage}&pageSize=${itemsPerPage}&categoryId=${promotionCategory}`);
        } else {
          result = await fetchGetWithCount(`${endpoints.PROMOTION}&pageNumber=${currentPage}&pageSize=${itemsPerPage}`);
        }
        if (result) {
          setBusinesses(result.data);
          setIsLoading(false);
          setTotalCount(result.totalCount);
          if (previousData !== null) {
            updatePage('promotionPage', 1);
            updateCurrentPageNumbers('promotion', []);
            setPreviousData(null) 
          }    
        }
      };
      fetchData();
    }
  }, [currentPage, data, city, promotionCategory]);

  return (
    <>
      <Add />
      <section className="content">
        <div className="content__title-box" id='content'>
          <h1 className="content__title">
            Акции в <span className="content__city">{cityName.name}</span>
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
            setCurrentPage={(page) => { updatePage('promotionPage', page); }} 
            totalCount={totalCount}
            currentPageNumbers={currentPageNumbers}
            updateCurrentPageNumbers={(numbers) => updateCurrentPageNumbers('promotion', numbers)}
          />
        }
      </section>
      <InfoMobileApp />
      <Info />
    </>
  );
}