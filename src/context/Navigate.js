import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeOfDataContext } from './TypeOfData';
import { CategoriesContext } from './CategoriesContext';
export const NavigateContext = createContext(null);

export const NavigateProvider = ({ children }) => {
    const navigate = useNavigate();
    const { type } = useContext(TypeOfDataContext)
    const { discountCategory, promotionCategory, updateDiscountCategory, updatePromotionCategory } = useContext(CategoriesContext)

    const typeButtonClick = (type, route) => {
        navigate(route, { replace: false });
        window.scrollTo(0, 0);
    }
    const typeButtonCategoriesClick = (newType, route) => {
        typeButtonClick(newType, route)

        switch (newType) {
            case "discounts":
                if (discountCategory && type === "discounts") {
                    updateDiscountCategory(null)
                }
                break;
            case "promotion":
                if (promotionCategory && type === "promotion") {
                    updatePromotionCategory(null)
                }
                break;
            default:
                break;
        }
    }

    return (
        <NavigateContext.Provider value={{ typeButtonClick, typeButtonCategoriesClick }}>
            {children}
        </NavigateContext.Provider>
    );
};
