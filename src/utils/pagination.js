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

export const handlePrevPage = (pageNumbers, indexOfFirstPage, indexOfLastPage, setIndexOfFirstPage, setIndexOfLastPage, updateCurrentPageNumbers) => {
    const totalPages = pageNumbers.length;

    // Проверяем, можем ли мы прокрутить страницы назад
    if (indexOfFirstPage > 0) {
        const pagesPerScroll = calculatePagesPerScroll(pageNumbers, 40); // Определите количество страниц для прокрутки

        // Новый первый индекс - это текущий первый индекс минус количество страниц для прокрутки
        const newIndexOfFirstPage = Math.max(0, indexOfFirstPage - pagesPerScroll);

        // Новый последний индекс - это новый первый индекс плюс количество страниц для отображения
        const newIndexOfLastPage = Math.min(newIndexOfFirstPage + pagesPerScroll, totalPages);
        setIndexOfFirstPage(newIndexOfFirstPage, newIndexOfLastPage);
        setIndexOfLastPage(newIndexOfLastPage);

        // Обновляем текущие номера страниц
        updateCurrentPageNumbers(pageNumbers.slice(newIndexOfFirstPage, newIndexOfLastPage));
    }
};
export const handleNextPage = (pageNumbers, indexOfFirstPage, indexOfLastPage, setIndexOfFirstPage, setIndexOfLastPage, updateCurrentPageNumbers) => {
    const totalPages = pageNumbers.length;

    // Проверяем, можем ли мы прокрутить страницы вперед
    if (indexOfLastPage < totalPages) { 
        const pagesPerScroll = calculatePagesPerScroll(pageNumbers, 40); // Определите количество страниц для прокрутки

        // Новый первый индекс - это текущий последний индекс
        const newIndexOfFirstPage = indexOfLastPage;

        // Новый последний индекс - это новый первый индекс плюс количество страниц для отображения
        const newIndexOfLastPage = Math.min(newIndexOfFirstPage + pagesPerScroll, totalPages);

        setIndexOfFirstPage(newIndexOfFirstPage);
        setIndexOfLastPage(newIndexOfLastPage);
        console.log(pagesPerScroll, newIndexOfFirstPage, newIndexOfLastPage)
        // Обновляем текущие номера страниц
        updateCurrentPageNumbers(pageNumbers.slice(newIndexOfFirstPage, newIndexOfLastPage));
    }
};


export const calculateIndexOfLastPage = (pageNumbers, buttonWidth) => {
    const screenWidth = window.innerWidth - 90;
    const maxButtonsOnScreen = Math.floor(screenWidth / buttonWidth);
    const indexOfLastPage = Math.min(maxButtonsOnScreen, pageNumbers.length);
    return indexOfLastPage;
};
