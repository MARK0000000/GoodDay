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
export default function Discounts() {
  const endpoints = useEndpoints();
  const { discountCategory } = useContext(CategoriesContext)
  const { data } = useContext(SearchContext);
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage] = useState(9);
  const [totalCount, setTotalCount] = useState();
  const { city, cityName, cityLoading } = useContext(CityContext);


  const { paginationState, updatePage, updateCurrentPageNumbers } = usePagination();
  const currentPage = paginationState.discountsPage;
  const currentPageNumbers = paginationState.discountsCurrentPageNumbers;

  const [previousData, setPreviousData] = useState(null);

  useEffect(() => {
    if (cityLoading) return;
    if (data && data.data) {
      if (previousData !== data.data) {
        updatePage('discountsPage', 1);
        updateCurrentPageNumbers('discounts', []);
        setPreviousData(data.data)
      }

      const slicedData = data.data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
      setBusinesses(slicedData);
      setIsLoading(false);
      setTotalCount(data.totalCount);

    } else {
      const fetchData = async () => {
        setIsLoading(true);
        let result = null
        if (discountCategory) {
          result = await fetchGetWithCount(`${endpoints.DISCOUNTS_CATEGORY}&pageNumber=${currentPage}&pageSize=${itemsPerPage}&categoryId=${discountCategory}`);
        } else {
          result = await fetchGetWithCount(`${endpoints.DISCOUNTS}&pageNumber=${currentPage}&pageSize=${itemsPerPage}`);
        }
        if (result) {
          setBusinesses(result.data);
          setIsLoading(false);
          setTotalCount(result.totalCount);
          if (previousData !== null) {
            updatePage('discountsPage', 1);
            updateCurrentPageNumbers('discounts', []);
            setPreviousData(null)
          }
        }
      };
      fetchData();
    }
  }, [currentPage, data, city, discountCategory, cityLoading]);

  return (
    <>
      <Add />
      <section className="content">
        <div className="content__title-box" id='content'>
          <h1 className="content__title">
            Скидки в <span className="content__city">{cityName}</span>
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
            setCurrentPage={(page) => { updatePage('discountsPage', page); }}
            totalCount={totalCount}
            currentPageNumbers={currentPageNumbers}
            updateCurrentPageNumbers={(numbers) => updateCurrentPageNumbers('discounts', numbers)}
            searchData={previousData}
          />
        }
      </section>
      <InfoMobileApp />
      <Info />
    </>
  );
}