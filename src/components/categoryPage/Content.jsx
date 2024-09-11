import React, { useEffect, useState, useContext, useMemo } from 'react';
import { SearchContext } from '../../context/Search';
import { SkeletonContent } from '../UI/loaders/SkeletonContent';
import { changePageNumbers } from '../../utils/pagination';
import Pagination from '../content/Pagination';
import BusinessCard from '../content/BusinessCard';
import NothingFound from '../UI/loaders/NothingFound';
import { filterBusinesses } from '../../utils/filterBusinesses';
import { calculateIndexOfLastPage } from '../../utils/pagination';

export default function Content({ businesses, itemsPerPage, currentPage, setCurrentPage, totalCount }) {
  const [businessCards, setBusinessCards] = useState(businesses); // Инициализируем с пропсом businesses
  const { searchValue } = useContext(SearchContext);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [indexOfFirstPage, setIndexOfFirstPage] = useState(0);
  const [indexOfLastPage, setIndexOfLastPage] = useState(0);

  const [pageNumbers, setPageNumbers] = useState([]);
  const [currentPageNumbers, setCurrentPageNumbers] = useState(pageNumbers.slice(indexOfFirstPage, indexOfLastPage));

  // Обновляем бизнесы при изменении пропса businesses
  useEffect(() => {
    setBusinessCards(businesses);
  }, [businesses]);

  // Обновляем пагинацию при изменении totalCount
  useEffect(() => {
    if (totalCount) {
      changePageNumbers(totalCount, itemsPerPage, setPageNumbers, businessCards);
    }
  }, [totalCount]);

  useEffect(() => {
    const updateIndexOfLastPage = () => {
      const screenWidth = window.innerWidth - 90;
      const maxButtonsOnScreen = Math.floor(screenWidth / 40);
      const newIndexOfLastPage = Math.min(maxButtonsOnScreen, pageNumbers.length);
      setIndexOfLastPage(newIndexOfLastPage);
      setCurrentPageNumbers(pageNumbers.slice(indexOfFirstPage, newIndexOfLastPage));
      setIndexOfFirstPage(0);
    };

    updateIndexOfLastPage(); // Вызов функции при первоначальной загрузке

    window.addEventListener('resize', updateIndexOfLastPage); // Обновление при изменении ширины экрана

    return () => {
      window.removeEventListener('resize', updateIndexOfLastPage); // Удаление слушателя при размонтировании компонента
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
    setCurrentPageNumbers,
    totalCount,
  };

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