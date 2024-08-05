import React, {useContext, useEffect} from 'react';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import Main from '../components/Main';
import { AuthProvider } from '../hooks/useAuth';
import Login from '../pages/Login';
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