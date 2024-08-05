import Discounts from '../pages/Discounts';
import Stock from '../pages/Stock'
import Services from '../pages/Services';
import CardPage from '../pages/CardPage';

import Auto from '../pages/categories/Auto';
import Beauty from '../pages/categories/Beauty';
import Children from '../pages/categories/Children';
import Education from '../pages/categories/Education';
import Entertainment from '../pages/categories/Entertainment';
import Food from '../pages/categories/Food';
import Sport from '../pages/categories/Sport';
import Health from '../pages/categories/Health';

import Partnership from '../pages/other/Partnership';
import AboutApp from '../pages/other/AboutApp';

import Login from '../pages/Login';
import SingIn from '../components/login/SingIn';
import SingUp from '../components/login/SingUp';

import Recreation from '../pages/categories/Recreation';
import Accessories from '../pages/categories/Accessories';
import Gifts from '../pages/categories/Gifts';
import ClothesAndShoes from '../pages/categories/ClothesAndShoes';
import Equipment from '../pages/categories/Equipment';
import EverythingForHome from '../pages/categories/EverythingForHome';
import MasterClasses from '../pages/categories/MasterClasses';
import Other from '../pages/categories/Other';
import Pets from '../pages/categories/Pets';
import Repair from '../pages/categories/Repair';

export const privateRoute = [
    {path: 'discounts', element: <Discounts/>},
    {path: 'stock', element: <Stock/>},

    {path: 'entertainment', element: <Entertainment/>},
    {path: 'beauty', element: <Beauty/>},
    {path: 'food', element: <Food />},
    {path: 'health', element: <Health/>},
    {path: 'children', element: <Children/>},
    {path: 'sport', element: <Sport/>},
    {path: 'education', element: <Education/>},
    {path: 'auto', element: <Auto/>},
    {path: 'recreation', element: <Recreation/>},
    {path: 'accessories', element: <Accessories/>},
    {path: 'gifts', element: <Gifts/>},
    {path: 'clothesandshoes', element: <ClothesAndShoes/>},
    {path: 'equipment', element: <Equipment/>},
    {path: 'evetythingforhome', element: <EverythingForHome/>},
    {path: 'masterclasses', element: <MasterClasses/>},
    {path: 'other', element: <Other/>},
    {path: 'Pets', element: <Pets/>},
    {path: 'repair', element: <Repair/>},


    {path: 'discounts/:id', element: <CardPage/>},
    {path: 'stock/:id', element: <CardPage/>},
    {path: 'entertainment/:id', element: <CardPage/>},
    {path: 'beauty/:id', element: <CardPage/>},
    {path: 'food/:id', element: <CardPage/>},
    {path: 'health/:id', element: <CardPage/>},
    {path: 'children/:id', element: <CardPage/>},
    {path: 'sport/:id', element: <CardPage/>},
    {path: 'education/:id', element: <CardPage/>},
    {path: 'auto/:id', element: <CardPage/>},
    {path: 'partnership/:id', element: <CardPage/>},

    {path: 'partnership', element: <Partnership/>},
    {path: 'aboutapp', element: <AboutApp/>},
    {path: 'services', element: <Services/>},
 ]

 export const publicRoute = [
    {path: 'login', element: <Login/>},
    {path: 'login/in', element: <SingIn/>},
    {path: 'logn/up', element: <SingUp/>},
 ]
