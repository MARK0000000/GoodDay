import React, { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
    const [city, setCity] = useLocalStorage('city', 1)

    function updateCity (city) {
        setCity(city)
    }

    useEffect(() => {

    }, [])
    
  return (
    <CityContext.Provider value={{ city, updateCity }}>
      {children}
    </CityContext.Provider>
  );
};
