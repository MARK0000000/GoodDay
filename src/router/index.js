import Discounts from '../pages/Discounts';
import Stock from '../pages/Stock'
import BusinessPage from '../pages/BusinessPage';
import Services from '../pages/Services';
import ServicePage from '../pages/ServicePage';

import Partnership from '../pages/other/Partnership';
import AboutApp from '../pages/other/AboutApp';

import Login from '../pages/Login';
import SingIn from '../components/login/SingIn';
import SingUp from '../components/login/SingUp';

import * as Categories from '../pages/categories';

export const privateRoute = [
    {path: 'discounts', element: <Discounts/>},
    {path: 'stock', element: <Stock/>},

    {path: 'entertainment', element: <Categories.Entertainment/>},
    {path: 'beauty', element: <Categories.Beauty/>},
    {path: 'food', element: <Categories.Food />},
    {path: 'health', element: <Categories.Health/>},
    {path: 'children', element: <Categories.Children/>},
    {path: 'sport', element: <Categories.Sport/>},
    {path: 'education', element: <Categories.Education/>},
    {path: 'auto', element: <Categories.Auto/>},
    {path: 'recreation', element: <Categories.Recreation/>},
    {path: 'accessories', element: <Categories.Accessories/>},
    {path: 'gifts', element: <Categories.Gifts/>},
    {path: 'clothesandshoes', element: <Categories.ClothesAndShoes/>},
    {path: 'equipment', element: <Categories.Equipment/>},
    {path: 'evetythingforhome', element: <Categories.EverythingForHome/>},
    {path: 'masterclasses', element: <Categories.MasterClasses/>},
    {path: 'other', element: <Categories.Other/>},
    {path: 'Pets', element: <Categories.Pets/>},
    {path: 'repair', element: <Categories.Repair/>},



    {path: 'discounts/:id', element: <BusinessPage/>},
    {path: 'stock/:id', element: <BusinessPage/>},
    {path: 'entertainment/:id', element: <BusinessPage/>},
    {path: 'beauty/:id', element: <BusinessPage/>},
    {path: 'food/:id', element: <BusinessPage/>},
    {path: 'health/:id', element: <BusinessPage/>},
    {path: 'children/:id', element: <BusinessPage/>},
    {path: 'sport/:id', element: <BusinessPage/>},
    {path: 'education/:id', element: <BusinessPage/>},
    {path: 'auto/:id', element: <BusinessPage/>},
    {path: 'partnership/:id', element: <BusinessPage/>},

    {path: 'partnership', element: <Partnership/>},
    {path: 'aboutapp', element: <AboutApp/>},
    {path: 'services', element: <Services/>},
    {path: 'services/:id', element: <ServicePage/>},
 ]

 export const publicRoute = [
    {path: 'login', element: <Login/>},
    {path: 'login/in', element: <SingIn/>},
    {path: 'logn/up', element: <SingUp/>},
 ]
