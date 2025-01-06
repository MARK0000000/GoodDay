import React, { createContext, useState, useContext } from 'react';

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [paginationState, setPaginationState] = useState({
    promotionPage: 1,
    promotionCurrentPageNumbers: [],

    discountsPage: 1,
    discountsCurrentPageNumbers: [],
  });

  const updatePage = (component, page) => {
    setPaginationState((prev) => ({
      ...prev,
      [component]: page,
    }));
  };

  const updateCurrentPageNumbers = (component, currentPageNumbers) => {
    setPaginationState((prev) => ({
      ...prev,
      [`${component}CurrentPageNumbers`]: currentPageNumbers,
    }));
  };

  const resetDiscountstPagination = () => {
    setPaginationState((prev) => ({
      promotionPage: prev.promotionPage,
      promotionCurrentPageNumbers: prev.promotionCurrentPageNumbers,
      discountsPage: 1,
      discountsCurrentPageNumbers: [],

    }));
  };
  const resetPromotionPagination = () => {
    setPaginationState((prev) => ({
      promotionPage: 1,
      promotionCurrentPageNumbers: [],
      discountsPage: prev.discountsPage,
      discountsCurrentPageNumbers: prev.discountsCurrentPageNumbers,
    }));
  };

  return (
    <PaginationContext.Provider value={{ paginationState, updatePage, updateCurrentPageNumbers, resetDiscountstPagination, resetPromotionPagination }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  return useContext(PaginationContext);
};