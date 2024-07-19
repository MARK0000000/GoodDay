import React from "react";
import './styles/style.scss'
import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import { useState, useEffect } from 'react';
import { fetchGet, fetchPost } from "./APi/fetch";

function App() {
  // const personData = {
  //   "email": "test@test.ru",
  //   "password": "7sdff12d"
  // }
  
  return (
   <>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
   </>
  );
}

export default App;

