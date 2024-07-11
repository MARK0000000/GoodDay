import React, {useContext, useEffect} from 'react';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import Main from '../componenets/Main';
import Stock from '../componenets/Stock'
import Discounts from '../componenets/Discounts';
function AppRouter() {

   return (
         <Routes>
            <Route path='/' element={<Main/>}>
                <Route index element={<Navigate to="all" />} />
                <Route path={'all'} element={<Discounts/>}/>
                <Route path={'hit'} element={<Stock/>}/>
            </Route>
         </Routes>
   )
}

export default AppRouter;