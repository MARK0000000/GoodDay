import React, { useContext } from 'react';
import Discounts from '../pages/Discounts';
import Promotion from '../pages/Promotion';
import PromotionPage from '../pages/PromotionPage';
import DiscountPage from '../pages/DiscountPage';
import Services from '../pages/Services';
import ServicePage from '../pages/ServicePage';
import * as Categories from '../pages/categories';
import * as OtherPages from '../pages/other';
import Posters from '../pages/Posters';
import PosterPage from '../pages/PosterPage';
import { TypeOfDataContext } from '../context/TypeOfData'

const getCategoryComponent = (category) => {
   return Categories[category] || null; 
};

const generateBusinessRoutes = (basePath) => {
   return Object.keys(Categories).map(category => ({
       path: `${basePath}/${category.toLowerCase()}`,
       element: getCategoryComponent(category) ? React.createElement(getCategoryComponent(category)) : null
   })).concat(
       Object.keys(Categories).map(category => ({
           path: `${basePath}/${category.toLowerCase()}/:id`,
           element: <DynamicBusinessPage />
       }))
   );
};

const DynamicBusinessPage = () => {
    const { type } = useContext(TypeOfDataContext); 

    if (type === 'promotion') {
        return <PromotionPage />;
    } else if (type === 'discounts') {
        return <DiscountPage />;
    }

    return null; 
};

export const privateRoute = [
    { path: 'discounts', element: <Discounts /> },
    { path: 'discounts/:id', element: <DiscountPage /> },
    { path: 'promotion', element: <Promotion /> },
    { path: 'promotion/:id', element: <PromotionPage /> },
    { path: 'services', element: <Services /> },
    { path: 'services/:id', element: <ServicePage /> },
    { path: 'posters', element: <Posters /> },
    { path: 'posters/education', element: <Posters /> },
    { path: 'posters/:id', element: <PosterPage /> },

    ...generateBusinessRoutes(''),

    { path: 'partnership', element: <OtherPages.Partnership /> },
    { path: 'aboutapp', element: <OtherPages.AboutApp /> },
    { path: 'questions', element: <OtherPages.Questions /> },
    { path: 'contacts', element: <OtherPages.Contacts /> },
];