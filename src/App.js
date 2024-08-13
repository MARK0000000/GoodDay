import React from "react";
import './styles/style.scss'
import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import { SearchProvider } from "./context/Search";
import { NavigateProvider } from "./context/Navigate";

function App() {
  return (
   <>
    <BrowserRouter>
      <SearchProvider>
        <NavigateProvider>
          <AppRouter/>
        </NavigateProvider>
      </SearchProvider>
    </BrowserRouter>
   </>
  );
}

export default App;

