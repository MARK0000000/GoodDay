import React from "react";
import './styles/style.scss'
import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import { useState, useEffect } from 'react';
import { fetchGet, fetchPost, fetchPost2 } from "./api/fetch";
import { SearchProvider } from "./context/Search";
function App() {
  return (
   <>
    <BrowserRouter>
      <SearchProvider>
        <AppRouter/>
      </SearchProvider>
    </BrowserRouter>
   </>
  );
}

export default App;

