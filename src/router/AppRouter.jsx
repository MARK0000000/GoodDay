import React, {useContext, useEffect} from 'react';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import Main from '../componenets/Main';
import Stock from '../pages/Stock'
import Discounts from '../pages/Discounts';
import CardPage from '../componenets/CardPage';
import { AuthProvider } from '../hooks/useAuth';
import Login from '../pages/Login';
import SingUp from '../componenets/login/SingUp';
import SingIn from '../componenets/login/SingIn';
import { privateRoute, publicRoute } from '.';
function AppRouter() {

   return (
      <AuthProvider>
         <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={
                     <Main />
                  }>
               <Route index element={<Navigate to="discounts" />} />
                {privateRoute.map((item, index) => 
                  <Route path={item.path} element={item.element} key={index}/>
               )}
            </Route>
         </Routes>
      </AuthProvider>
   )
}

export default AppRouter;