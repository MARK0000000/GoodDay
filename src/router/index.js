import Stock from '../pages/Stock'
import Discounts from '../pages/Discounts';
import CardPage from '../componenets/CardPage';
import Auto from '../pages/Auto';
import Beauty from '../pages/Beauty';
import Children from '../pages/Children';
import Education from '../pages/Education';
import Entertainment from '../pages/Entertainment';
import Food from '../pages/Food';
import Sport from '../pages/Sport';
import Health from '../pages/Health';

import Login from '../pages/Login';
import SingIn from '../componenets/login/SingIn';
import SingUp from '../componenets/login/SingUp';

export const privateRoute = [
    {path: 'discounts', element: <Discounts/>},
    {path: 'discounts/:id', element: <CardPage/>},
    {path: 'stock', element: <Stock/>},
    {path: 'entertainment', element: <Entertainment/>},
    {path: 'beauty', element: <Beauty/>},
    {path: 'food', element: <Food />},
    {path: 'health', element: <Health/>},
    {path: 'children', element: <Children/>},
    {path: 'sport', element: <Sport/>},
    {path: 'education', element: <Education/>},
    {path: 'auto', element: <Auto/>},
 ]
 
 export const publicRoute = [
    {path: 'login', element: <Login/>},
    {path: 'login/in', element: <SingIn/>},
    {path: 'logn/up', element: <SingUp/>},
 ]
