import React, {useContext} from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Main from '../components/Main';
import { PosterCategoriesContext } from '../context/PosterCategories';
import PosterCategoryPage from '../pages/posterCategories/PosterCategoryPage';
import Soon from '../pages/posterCategories/Soon'
import PosterPage from '../pages/PosterPage'
import { privateRoute } from '.';
function AppRouter() {
   const {categories} = useContext(PosterCategoriesContext)

   return (
         // <AuthProvider>
         // </AuthProvider>
         <Routes>
            {/* <Route path='/login' element={<Login/>}/> */}
            <Route path='/' element={
                     <Main />
                  }>
               <Route index element={<Navigate to="/posters" />} />
               {categories.map((item, index) => 
                  <Route path={"posters/" + item.categoryRoute} element={<PosterCategoryPage/>} key={index}/>
               )}
               {categories.map((item, index) => 
                  <Route path={"posters/" + item.categoryRoute + '/:id'} element={<PosterPage/>} key={index}/>
               )}
               <Route path={"posters/soon"} element={<Soon/>}/>
               <Route path={"posters/soon/:id"} element={<PosterPage/>}/>
                {privateRoute.map((item, index) => 
                  <Route path={item.path} element={item.element} key={index}/>
               )}
            </Route>
         </Routes>
   )
}

export default AppRouter;