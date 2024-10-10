import React from 'react';
import Discounts from '../pages/Discounts';
import Promotion from '../pages/Promotion';
import BusinessPage from '../pages/BusinessPage';
import Services from '../pages/Services';
import ServicePage from '../pages/ServicePage';
import * as Categories from '../pages/categories';
import * as OtherPages from '../pages/other';
// import * as CategoryPosters from '../pages/categoriesPosters';
import Posters from '../pages/Posters';
import PosterPage from '../pages/PosterPage';

const getCategoryComponent = (category) => {
   return Categories[category] || null; 
};
// const getCategoryPostersComponent = (category) => {
//     return CategoryPosters[category] || null; 
//  };
 

const generateBusinessRoutes = (basePath) => {
   return Object.keys(Categories).map(category => ({
       path: `${basePath}/${category.toLowerCase()}`,
       element: getCategoryComponent(category) ? React.createElement(getCategoryComponent(category)) : null
   })).concat(
       Object.keys(Categories).map(category => ({
           path: `${basePath}/${category.toLowerCase()}/:id`,
           element: <BusinessPage />
       }))
   );
};

// const generateCategoryPosterRoutes = (basePath) => {
//    return Object.keys(CategoryPosters).map(category => ({
//        path: `${basePath}/${category.toLowerCase()}`,
//        element: getCategoryPostersComponent(category) ? React.createElement(getCategoryPostersComponent(category)) : null
//    })).concat(
//        Object.keys(CategoryPosters).map(category => ({
//            path: `${basePath}/${category.toLowerCase()}/:id`,
//            element: <PosterPage />
//        }))
//    );
// };

export const privateRoute = [
    { path: 'discounts', element: <Discounts /> },
    { path: 'discounts/:id', element: <BusinessPage /> },
    { path: 'promotion', element: <Promotion/> },
    { path: 'promotion/:id', element: <BusinessPage /> },
    { path: 'services', element: <Services /> },
    { path: 'services/:id', element: <ServicePage /> },
    {path: 'posters', element: <Posters /> },
    {path: 'posters/education', element: <Posters /> },
    {path: 'posters/:id', element: <PosterPage /> },

    ...generateBusinessRoutes(''),

    // ...generateCategoryPosterRoutes(''), 


    { path: 'partnership', element: <OtherPages.Partnership /> },
    { path: 'aboutapp', element: <OtherPages.AboutApp /> },
    { path: 'cooperation', element: <OtherPages.Cooperation /> },
    { path: 'invite', element: <OtherPages.Invite /> },
    { path: 'questions', element: <OtherPages.Questions /> },
    { path: 'contacts', element: <OtherPages.Contacts /> },
];