import React, { useEffect, useState, useContext, useMemo } from 'react';
import { SearchContext } from '../../context/Search';
import { SkeletonContent } from '../UI/loaders/SkeletonContent';
import { changePageNumbers} from '../../utils/pagination';
import Pagination from '../content/Pagination';
import BusinessCard from '../content/BusinessCard';
import NothingFound from '../UI/loaders/NothingFound';
import { filterBusinesses } from '../../utils/filterBusinesses';

export default function Content({ businesses, isLoading }) {

    const [businessCards, setBusinessCards] = useState([]);

    const {searchValue} = useContext(SearchContext)

    const [itemsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = businessCards.slice(indexOfFirstItem, indexOfLastItem);
    const [indexOfFirstPage, setIndexOfFirstPage] = useState(0);
    const [indexOfLastPage, setIndexOfLastPage] = useState(30);

    const [pageNumbers, setPageNumbers] = useState([])
    const [currentPageNumbers, setCurrentPageNumbers] = useState(pageNumbers.slice(indexOfFirstPage, indexOfLastPage));
  

    const filteredBusinesses = useMemo(() => filterBusinesses(businesses, searchValue), [businesses, searchValue]);

    useEffect(() => {
        setBusinessCards(filteredBusinesses);
        setCurrentPage(1);
    }, [filteredBusinesses]);

    useEffect(() => {
        changePageNumbers(businessCards, itemsPerPage, setPageNumbers);
    }, [businessCards]);

    useEffect(() => {
        setCurrentPageNumbers(pageNumbers.slice(indexOfFirstPage, indexOfLastPage));
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
        setCurrentPageNumbers
      };

    return (
        <>
        {isLoading ?
            <div 
                style={{display: 'flex', justifyContent: "space-between"}}
            >
                <SkeletonContent/>
                <SkeletonContent/>
                <SkeletonContent/>
            </div>
            :
            <>
                {currentItems.length == 0 ?
                    <NothingFound/>
                    :                
                <div className='content__container'>
                    {currentItems.map((item, index) => (
                        <BusinessCard key={index} item={item}/>
                    ))}
                    </div>
                }
                <Pagination {...paginationProps} />
            </>
        }
        </>
    );
}