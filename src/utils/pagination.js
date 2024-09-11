export const changePageNumbers = (totalCount, itemsPerPage, setPageNumbers) => {
    const numbers = [];
    for (let i = 1; i <= Math.ceil(totalCount / itemsPerPage); i++) {
        numbers.push(i);
    }
    setPageNumbers(numbers);
}
export const calculatePagesPerScroll = (pageNumbers, buttonWidth) => {
    const screenWidth = window.innerWidth - 90;
    const maxButtonsOnScreen = Math.floor(screenWidth / buttonWidth);
    const indexOfLastPage = Math.min(maxButtonsOnScreen, pageNumbers.length);
    return indexOfLastPage;
  };

export const handlePrevPage = (pageNumbers, indexOfFirstPage, indexOfLastPage, setIndexOfFirstPage, setIndexOfLastPage, setCurrentPageNumbers) => {
    if (indexOfFirstPage > 0) {
        let pagesPerScroll = calculatePagesPerScroll(pageNumbers, 40)
        setIndexOfFirstPage(indexOfFirstPage - (indexOfLastPage - pagesPerScroll));
        setIndexOfLastPage(indexOfLastPage - (indexOfLastPage - pagesPerScroll));
        setCurrentPageNumbers(pageNumbers.slice(indexOfFirstPage - (indexOfLastPage - pagesPerScroll), indexOfLastPage - (indexOfLastPage - pagesPerScroll)));
    }
};

export const handleNextPage = (pageNumbers, indexOfFirstPage, indexOfLastPage, setIndexOfFirstPage, setIndexOfLastPage, setCurrentPageNumbers) => {
    if (indexOfLastPage < pageNumbers.length) {
        setIndexOfFirstPage(indexOfFirstPage + indexOfLastPage);
        setIndexOfLastPage(indexOfLastPage + indexOfLastPage);
        setCurrentPageNumbers(pageNumbers.slice(indexOfFirstPage + indexOfLastPage, indexOfLastPage + indexOfLastPage));
    }
};

export const calculateIndexOfLastPage = (pageNumbers, buttonWidth) => {
    const screenWidth = window.innerWidth - 90;
    const maxButtonsOnScreen = Math.floor(screenWidth / buttonWidth);
    const indexOfLastPage = Math.min(maxButtonsOnScreen, pageNumbers.length);
    return indexOfLastPage;
  };
