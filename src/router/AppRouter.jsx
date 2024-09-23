import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Main from '../components/Main';
// import { AuthProvider } from '../hooks/useAuth';
import { privateRoute } from '.';
function AppRouter() {

   return (
         // <AuthProvider>
         // </AuthProvider>
         <Routes>
            {/* <Route path='/login' element={<Login/>}/> */}
            <Route path='/' element={
                     <Main />
                  }>
               <Route index element={<Navigate to="discounts" />} />
                {privateRoute.map((item, index) => 
                  <Route path={item.path} element={item.element} key={index}/>
               )}
            </Route>
         </Routes>
   )
}

export default AppRouter;