import React, { createContext, useState } from 'react';
import { usePagination } from './PaginationContext';
export const CategoriesContext = createContext(null);

export const CategoriesProvider = ({ children }) => {
    const [discountCategory, setDiscountCategory] = useState(null)
    const {resetDiscountstPagination, resetPromotionPagination} = usePagination()
    function updateDiscountCategory(categoryId) {
      resetDiscountstPagination()
      setDiscountCategory(categoryId)
    }

    const [promotionCategory, setPromotionCategory] = useState(null)
    function updatePromotionCategory(categoryId) {
      resetPromotionPagination()
      setPromotionCategory(categoryId)
    }

    return (
        <CategoriesContext.Provider value={{ discountCategory, promotionCategory, updateDiscountCategory, updatePromotionCategory}}>
            {children}
        </CategoriesContext.Provider>
    );
}