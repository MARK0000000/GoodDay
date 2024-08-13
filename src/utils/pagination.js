export const changePageNumbers = (cards, itemsPerPage, setPageNumbers) => {
    const numbers = [];
    for (let i = 1; i <= Math.ceil(cards.length / itemsPerPage); i++) {
        numbers.push(i);
    }
    setPageNumbers(numbers);
}

export const handlePrevPage = (pageNumbers, indexOfFirstPage, indexOfLastPage, setIndexOfFirstPage, setIndexOfLastPage, setCurrentPageNumbers) => {
    if (indexOfFirstPage > 0) {
        setIndexOfFirstPage(indexOfFirstPage - 10);
        setIndexOfLastPage(indexOfLastPage - 10);
        setCurrentPageNumbers(pageNumbers.slice(indexOfFirstPage - 10, indexOfLastPage - 10));
    }
};

export const handleNextPage = (pageNumbers, indexOfFirstPage, indexOfLastPage, setIndexOfFirstPage, setIndexOfLastPage, setCurrentPageNumbers) => {
    if (indexOfLastPage < 60) {
        setIndexOfFirstPage(indexOfFirstPage + 10);
        setIndexOfLastPage(indexOfLastPage + 10);
        setCurrentPageNumbers(pageNumbers.slice(indexOfFirstPage + 10, indexOfLastPage + 10));
    }
};
