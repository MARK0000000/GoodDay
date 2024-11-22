import React, { useEffect, useState} from 'react';
import { changePageNumbers } from '../../utils/pagination';
import Pagination from '../content/Pagination';
import BusinessCard from '../content/CardDiscounts';
import NothingFound from '../UI/loaders/NothingFound';

export default function ContentDiscounts({ businesses, itemsPerPage, currentPage, setCurrentPage, totalCount, currentPageNumbers, updateCurrentPageNumbers, searchData }) {
  const [businessCards, setBusinessCards] = useState(businesses); 

  const [indexOfFirstPage, setIndexOfFirstPage] = useState(0);
  const [indexOfLastPage, setIndexOfLastPage] = useState(0);

  const [pageNumbers, setPageNumbers] = useState([]);


  useEffect(() => {
    setBusinessCards(businesses);
  }, [businesses]);

  useEffect(() => {
    if (totalCount) {
      changePageNumbers(totalCount, itemsPerPage, setPageNumbers, businessCards);
    }
  }, [totalCount, businessCards, itemsPerPage]);

  useEffect(() => {
    const updateIndexOfLastPage = () => {
      const screenWidth = window.innerWidth - 90;
      const maxButtonsOnScreen = Math.floor(screenWidth / 40);
      const newIndexOfLastPage = Math.min(maxButtonsOnScreen, pageNumbers.length);
      setIndexOfLastPage(currentPageNumbers.length !== 0 ? currentPageNumbers[currentPageNumbers.length - 1] : newIndexOfLastPage);
      if (!currentPageNumbers.length !== 0 && pageNumbers.length !== 0) {
        updateCurrentPageNumbers(pageNumbers.slice(indexOfFirstPage, newIndexOfLastPage));
      }
      setIndexOfFirstPage(searchData == null ? 0 : currentPageNumbers.length !== 0 ? (currentPageNumbers[0] - 1) : 0);
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

  return (
    <>
      {businessCards.length === 0 ? (
        <NothingFound />
      ) : (
        <div className={`content__container ${businessCards.length % 2 !== 0 && 'content__container_justifyLast'}`}>
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