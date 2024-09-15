import React from 'react';
import Discounts from '../pages/Discounts';
import Promotion from '../pages/Promotion'
import BusinessPage from '../pages/BusinessPage';
import Services from '../pages/Services';
import ServicePage from '../pages/ServicePage';
import * as Categories from '../pages/categories';
import * as OtherPages from '../pages/other';
import Login from '../pages/Login';
import SingIn from '../components/login/SingIn';
import SingUp from '../components/login/SingUp';

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
           element: <BusinessPage />
       }))
   );
};
export const privateRoute = [
   { path: 'discounts', element: <Discounts /> },
   { path: 'discounts/:id', element: <BusinessPage /> },
   { path: 'promotion', element: <Promotion/> },
   { path: 'promotion/:id', element: <BusinessPage /> },
   { path: 'services', element: <Services /> },
   { path: 'services/:id', element: <ServicePage /> },

   ...generateBusinessRoutes(''),

   { path: 'partnership', element: <OtherPages.Partnership /> },
   { path: 'aboutapp', element: <OtherPages.AboutApp /> },
   { path: 'aboutcompany', element: <OtherPages.AboutCompany /> },
   { path: 'cityDiscounts', element: <OtherPages.CityDiscounts /> },
   { path: 'blog', element: <OtherPages.Blog /> },
   { path: 'cooperation', element: <OtherPages.Cooperation /> },
   { path: 'franchise', element: <OtherPages.Franchise /> },
   { path: 'invite', element: <OtherPages.Invite /> },
   { path: 'questions', element: <OtherPages.Questions /> },
];

export const publicRoute = [
   { path: 'login', element: <Login /> },
   { path: 'login/in', element: <SingIn /> },
   { path: 'login/up', element: <SingUp /> },
];
