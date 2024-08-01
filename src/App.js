import React from "react";
import './styles/style.scss'
import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import { useState, useEffect } from 'react';
import { fetchGet, fetchPost, fetchPost2 } from "./api/fetch";

function App() {
  return (
   <>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
   </>
  );
}

export default App;

