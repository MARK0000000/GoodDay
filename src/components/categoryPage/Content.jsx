import React, { useEffect, useState, useContext, useMemo } from 'react';
import { SearchContext } from '../../context/Search';
import { changePageNumbers } from '../../utils/pagination';
import Pagination from '../content/Pagination';
import BusinessCard from '../content/BusinessCard';
import NothingFound from '../UI/loaders/NothingFound';

export default function Content({ businesses, itemsPerPage, currentPage, setCurrentPage, totalCount, currentPageNumbers, updateCurrentPageNumbers, searchData }) {
  const [businessCards, setBusinessCards] = useState(businesses); 
  const { searchValue } = useContext(SearchContext);

  const indexOfLastItem = currentPage * itemsPerPage;
  const [indexOfFirstPage, setIndexOfFirstPage] = useState(0);
  const [indexOfLastPage, setIndexOfLastPage] = useState(0);

  const [pageNumbers, setPageNumbers] = useState([]);
  // const [currentPageNumbers, setCurrentPageNumbers] = useState(pageNumbers.slice(indexOfFirstPage, indexOfLastPage));


  useEffect(() => {
    setBusinessCards(businesses);
  }, [businesses]);

  useEffect(() => {
    if (totalCount) {
      changePageNumbers(totalCount, itemsPerPage, setPageNumbers, businessCards);
    }
  }, [totalCount]);
  // useEffect(() => {
  //   const screenWidth = window.innerWidth - 90;
  //   const maxButtonsOnScreen = Math.floor(screenWidth / 40);
  //   const newIndexOfLastPage = Math.min(maxButtonsOnScreen, pageNumbers.length);
  //   updateCurrentPageNumbers(pageNumbers.slice(0, newIndexOfLastPage));
  // }, [searchValue])

  useEffect(() => {
    console.log("reset")
    const updateIndexOfLastPage = () => {
      const screenWidth = window.innerWidth - 90;
      const maxButtonsOnScreen = Math.floor(screenWidth / 40);
      const newIndexOfLastPage = Math.min(maxButtonsOnScreen, pageNumbers.length);
      setIndexOfLastPage(currentPageNumbers.length != 0 ? currentPageNumbers[currentPageNumbers.length - 1] : newIndexOfLastPage);
      if (!currentPageNumbers.length != 0 && pageNumbers.length != 0) {
        updateCurrentPageNumbers(pageNumbers.slice(indexOfFirstPage, newIndexOfLastPage));
      }
      setIndexOfFirstPage(searchData == null ? 0 : currentPageNumbers.length != 0 ? (currentPageNumbers[0] - 1) : 0);
    };

    updateIndexOfLastPage();

    window.addEventListener('resize', updateIndexOfLastPage); 

    return () => {
      window.removeEventListener('resize', updateIndexOfLastPage); 
    };
  }, [pageNumbers]);

  const paginationProps = {
    itemsPerPage,
    currentPage,
    setCurrentPage,
    businesses,
    businessCards,
    currentPageNumbers,
    pageNumbers,
    indexOfFirstPage,
    indexOfLastPage,
    setIndexOfFirstPage,
    setIndexOfLastPage,
    updateCurrentPageNumbers,
    totalCount,
  };
  console.log(pageNumbers)
  return (
    <>
      {businessCards.length == 0 ? (
        <NothingFound />
      ) : (
        <div className={`content__container ${businessCards.length % 2 != 0 && 'content__container_justifyLast'}`}>
          {businessCards.map((item, index) => (
            <BusinessCard key={index} item={item} />
          ))}
        </div>
      )}
      {currentPageNumbers.length > 0 && (
        <Pagination {...paginationProps} />
      )}
    </>
  );
}