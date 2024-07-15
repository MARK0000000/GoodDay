import React, {useContext, useEffect} from 'react';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import Main from '../componenets/Main';
import Stock from '../componenets/Stock'
import Discounts from '../componenets/Discounts';
import CardPage from '../componenets/CardPage';
function AppRouter() {

   return (
         <Routes>
            <Route path='/' element={<Main/>}>
                <Route index element={<Navigate to="discounts" />} />
                <Route path={'discounts'} element={<Discounts/>}/>
                <Route path={'stock'} element={<Stock/>}/>
                <Route path={'discounts/:id'} element={<CardPage/>}/>
            </Route>
         </Routes>
   )
}

export default AppRouter;