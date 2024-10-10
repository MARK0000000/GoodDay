import React, { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import useEndpoints from '../api/apiConfig';
import { fetchGet } from '../api/fetch';
export const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
    const [city, setCity] = useLocalStorage('city', 1)
    const [cities, setCities] = useLocalStorage('cities', [])

    
    function updateCity (city) {
        setCity(city)
    }

    useEffect(() => {
      const fetchData = async () => {
        const result = await fetchGet(`https://elated-turing.178-124-131-24.plesk.page/city/all`);
        if (result) {
          setCities(result)
        }
      };
      fetchData();
    }, [])
    
  return (
    <CityContext.Provider value={{ city, updateCity, cities }}>
      {children}
    </CityContext.Provider>
  );
};
