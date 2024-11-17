import React, { createContext, useState, useContext } from 'react';

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [paginationState, setPaginationState] = useState({
    promotionPage: 1,
    promotionCurrentPageNumbers: [],

    discountsPage: 1,
    discountsCurrentPageNumbers: [],

    accessoriesPage: 1,
    accessoriesCurrentPageNumbers: [],

    autoPage: 1,
    autoCurrentPageNumbers: [],

    beautyPage: 1,
    beautyCurrentPageNumbers: [],

    childrenPage: 1,
    childrenCurrentPageNumbers: [],

    clothesAndShoesPage: 1,
    clothesAndShoesCurrentPageNumbers: [],

    educationPage: 1,
    educationCurrentPageNumbers: [],

    entertaimentPage: 1,
    entertaimentCurrentPageNumbers: [],

    equipmentPage: 1,
    equipmentCurrentPageNumbers: [],

    everythingForHomePage: 1,
    everythingForHomeCurrentPageNumbers: [],

    foodPage: 1,
    foodCurrentPageNumbers: [],

    giftsPage: 1,
    giftsCurrentPageNumbers: [],

    healthPage: 1,
    healthCurrentPageNumbers: [],

    masterClassesPage: 1,
    masterClassesCurrentPageNumbers: [],

    otherPage: 1,
    otherCurrentPageNumbers: [],

    petsPage: 1,
    petsCurrentPageNumbers: [],

    recreationPage: 1,
    recreationCurrentPageNumbers: [],

    repairPage: 1,
    repairCurrentPageNumbers: [],

    sportPage: 1,
    sportCurrentPageNumbers: [],
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

  // Функция для сброса всех значений, кроме первых двух
  const resetPagination = () => {
    setPaginationState((prev) => ({
      promotionPage: prev.promotionPage, // Сохраняем значение promotion
      promotionCurrentPageNumbers: prev.promotionCurrentPageNumbers, // Сохраняем значение promotionCurrent
      discountsPage: prev.discountsPage, // Сбрасываем остальные страницы
      discountsCurrentPageNumbers: prev.discountsCurrentPageNumbers,
      accessoriesPage: 1,
      accessoriesCurrentPageNumbers: [],
      autoPage: 1,
      autoCurrentPageNumbers: [],
      beautyPage: 1,
      beautyCurrentPageNumbers: [],
      childrenPage: 1,
      childrenCurrentPageNumbers: [],
      clothesAndShoesPage: 1,
      clothesAndShoesCurrentPageNumbers: [],
      educationPage: 1,
      educationCurrentPageNumbers: [],
      entertaimentPage: 1,
      entertaimentCurrentPageNumbers: [],
      equipmentPage: 1,
      equipmentCurrentPageNumbers: [],
      everythingForHomePage: 1,
      everythingForHomeCurrentPageNumbers: [],
      foodPage: 1,
      foodCurrentPageNumbers: [],
      giftsPage: 1,
      giftsCurrentPageNumbers: [],
      healthPage: 1,
      healthCurrentPageNumbers: [],
      masterClassesPage: 1,
      masterClassesCurrentPageNumbers: [],
      otherPage: 1,
      otherCurrentPageNumbers: [],
      petsPage: 1,
      petsCurrentPageNumbers: [],
      recreationPage: 1,
      recreationCurrentPageNumbers: [],
      repairPage: 1,
      repairCurrentPageNumbers: [],  
      sportPage: 1,
      sportCurrentPageNumbers: [],
    }));
  };
  const resetAllPagination = () => {
    setPaginationState((prev) => ({
      promotionPage: 1, 
      promotionCurrentPageNumbers: [], 
      discountsPage: 1, 
      discountsCurrentPageNumbers: [],
      accessoriesPage: 1,
      accessoriesCurrentPageNumbers: [],
      autoPage: 1,
      autoCurrentPageNumbers: [],
      beautyPage: 1,
      beautyCurrentPageNumbers: [],
      childrenPage: 1,
      childrenCurrentPageNumbers: [],
      clothesAndShoesPage: 1,
      clothesAndShoesCurrentPageNumbers: [],
      educationPage: 1,
      educationCurrentPageNumbers: [],
      entertaimentPage: 1,
      entertaimentCurrentPageNumbers: [],
      equipmentPage: 1,
      equipmentCurrentPageNumbers: [],
      everythingForHomePage: 1,
      everythingForHomeCurrentPageNumbers: [],
      foodPage: 1,
      foodCurrentPageNumbers: [],
      giftsPage: 1,
      giftsCurrentPageNumbers: [],
      healthPage: 1,
      healthCurrentPageNumbers: [],
      masterClassesPage: 1,
      masterClassesCurrentPageNumbers: [],
      otherPage: 1,
      otherCurrentPageNumbers: [],
      petsPage: 1,
      petsCurrentPageNumbers: [],
      recreationPage: 1,
      recreationCurrentPageNumbers: [],
      repairPage: 1,
      repairCurrentPageNumbers: [],  
      sportPage: 1,
      sportCurrentPageNumbers: [],
    }));
  };

  return (
    <PaginationContext.Provider value={{ paginationState, updatePage, updateCurrentPageNumbers, resetPagination, resetAllPagination }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  return useContext(PaginationContext);
};