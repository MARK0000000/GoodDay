import React, { useEffect, useState } from "react";
import './styles/style.scss'
import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import { SearchProvider } from "./context/Search";
import { NavigateProvider } from "./context/Navigate";
import { fetchPost } from "./api/fetch";
import endpoints from "./api/apiConfig";
import { CityProvider } from "./context/City";

function App() {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const userdata = {
  //     "email": "test@test.ru",
  //     "password": "7sdff12d"
  //   }
  //   const fetchData = async () => {
  //     const data = await fetchPost(userdata, endpoints.LOGIN);
  //     if (data) {
  //       setLoading(false)
  //     }
  //   };
  //   fetchData();
  // }, [])


  return (
   <>
    <BrowserRouter>
      <CityProvider>
        <SearchProvider>
          <NavigateProvider>
              <AppRouter/>
          </NavigateProvider>
        </SearchProvider>
      </CityProvider>
    </BrowserRouter>
   </>
  );
}

export default App;

