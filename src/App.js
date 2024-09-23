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
function App() {

  return (
   <>
    <BrowserRouter>
      <CityProvider>
        <TypeOfDataProvider>
          <SearchProvider>
            <NavigateProvider>
                <AppRouter/>
            </NavigateProvider>
          </SearchProvider>
        </TypeOfDataProvider>
      </CityProvider>
    </BrowserRouter>
   </>
  );
}

export default App;

