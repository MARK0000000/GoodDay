import React from 'react';
import Discounts from '../pages/Discounts';
import Promotion from '../pages/Promotion';
import PromotionPage from '../pages/PromotionPage';
import DiscountPage from '../pages/DiscountPage';
import Services from '../pages/Services';
import ServicePage from '../pages/ServicePage';
import * as OtherPages from '../pages/other';
import Posters from '../pages/Posters';
import PosterPage from '../pages/PosterPage';


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


    { path: 'partnership', element: <OtherPages.Partnership /> },
    { path: 'aboutapp', element: <OtherPages.AboutApp /> },
    { path: 'questions', element: <OtherPages.Questions /> },
    { path: 'contacts', element: <OtherPages.Contacts /> },
];