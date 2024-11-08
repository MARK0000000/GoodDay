import React from 'react'
import { handleNextPage, handlePrevPage } from '../../utils/pagination'
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Pagination(props) {
    const {
        itemsPerPage,
        currentPage,
        setCurrentPage,
        businesses,
        currentPageNumbers,
        pageNumbers,
        indexOfFirstPage,
        indexOfLastPage,
        setIndexOfFirstPage,
        setIndexOfLastPage,
        updateCurrentPageNumbers,
        totalCount
    } = props;
return (
    <ul className='pagination__container'>
        <li
            className={`pagination__item pagination__item_prev ${currentPageNumbers[0] === 1 ? 'pagination__item_disabled' : ''}`}
            onClick={() => handlePrevPage(pageNumbers, indexOfFirstPage, indexOfLastPage, setIndexOfFirstPage, setIndexOfLastPage, updateCurrentPageNumbers)}
        >
            &lt;&lt;
        </li>
        {totalCount > 9 &&
            currentPageNumbers.map(number => (
                <Link key={number}  to="content" smooth={true}>
                    <li onClick={() => setCurrentPage(number)} className={`pagination__item ${number === currentPage ? "pagination__item_active" : ""}`}>
                        {number}
                    </li>
                </Link>
            ))
        }
        <li
            className={`pagination__item pagination__item_next ${indexOfLastPage >= Math.ceil(totalCount / itemsPerPage) ? 'pagination__item_disabled' : ''}`}
            onClick={() => handleNextPage(pageNumbers, indexOfFirstPage, indexOfLastPage, setIndexOfFirstPage, setIndexOfLastPage, updateCurrentPageNumbers)}
        >
            &gt;&gt;
        </li>
    </ul>

  )
}
