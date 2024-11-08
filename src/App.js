import React, { useEffect, useState } from "react";
import './styles/style.scss'
import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import { SearchProvider } from "./context/Search";
import { NavigateProvider } from "./context/Navigate";
import { fetchPost } from "./api/fetch";
import endpoints from "./api/apiConfig";
import { CityProvider } from "./context/City";
import { TypeOfDataProvider } from "./context/TypeOfData";
import { PosterCategoriesProvider } from "./context/PosterCategories";
import { PaginationProvider } from "./context/PaginationContext";
function App() {

  return (
   <>
    <BrowserRouter>
      <CityProvider>
          <TypeOfDataProvider>
            <PosterCategoriesProvider>
                <SearchProvider>
                  <PaginationProvider>
                    <NavigateProvider>
                        <AppRouter/>
                    </NavigateProvider>
                  </PaginationProvider>
                </SearchProvider>
            </PosterCategoriesProvider>
          </TypeOfDataProvider>
      </CityProvider>
    </BrowserRouter>
   </>
  );
}

export default App;

