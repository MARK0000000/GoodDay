import React from "react";
import './styles/style.scss'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import { SearchProvider } from "./context/Search";
import { NavigateProvider } from "./context/Navigate";
import { CityProvider } from "./context/City";
import { TypeOfDataProvider } from "./context/TypeOfData";
import { PosterCategoriesProvider } from "./context/PosterCategories";
import { PaginationProvider } from "./context/PaginationContext";
import { CategoriesProvider } from "./context/CategoriesContext"
function App() {

  return (
    <>
      <BrowserRouter>
        <CityProvider>
          <TypeOfDataProvider>
            <PaginationProvider>
              <CategoriesProvider>
                <PosterCategoriesProvider>
                  <SearchProvider>
                    <NavigateProvider>
                      <AppRouter />
                    </NavigateProvider>
                  </SearchProvider>
                </PosterCategoriesProvider>
              </CategoriesProvider>
            </PaginationProvider>
          </TypeOfDataProvider>
        </CityProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

