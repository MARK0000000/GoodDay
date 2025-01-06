import React, { createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useLocation } from 'react-router-dom';
export const TypeOfDataContext = createContext(null);

export const TypeOfDataProvider = ({ children }) => {
  const [type, setType] = useLocalStorage('type', 'posters');
  const location = useLocation();
  function changeType(type) {
    setType(type)
  }

  useEffect(() => {
    const newType = location.pathname.split('/')[1]
    setType(newType)
  }, [location.pathname])
  return (
    <TypeOfDataContext.Provider value={{ type, changeType }}>
      {children}
    </TypeOfDataContext.Provider>
  );
};
