import React from 'react'
import { handleNextPage, handlePrevPage } from '../../utils/pagination'

export default function Pagination(props) {
    const {
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
    } = props;

return (
    <ul className='pagination__container'>
        <li
            className={`pagination__item pagination__item_prev ${indexOfFirstPage === 0 ? 'pagination__item_disabled' : ''}`}
            onClick={() => handlePrevPage(pageNumbers, indexOfFirstPage, indexOfLastPage, setIndexOfFirstPage, setIndexOfLastPage, setCurrentPageNumbers)}
        >
            &lt;&lt;
        </li>
        {businessCards.length > 9 &&
            currentPageNumbers.map(number => (
                <li key={number} onClick={() => setCurrentPage(number)} className={`pagination__item ${number === currentPage ? "pagination__item_active" : ""}`}>
                    {number}
                </li>
            ))
        }
        <li
            className={`pagination__item pagination__item_next ${indexOfLastPage >= Math.ceil(businesses.length / itemsPerPage) ? 'pagination__item_disabled' : ''}`}
            onClick={() => handleNextPage(pageNumbers, indexOfFirstPage, indexOfLastPage, setIndexOfFirstPage, setIndexOfLastPage, setCurrentPageNumbers)}
        >
            &gt;&gt;
        </li>
    </ul>

  )
}
