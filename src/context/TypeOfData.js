import React, { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const TypeOfDataContext = createContext(null);

export const TypeOfDataProvider = ({ children }) => {
  const [type, setType] = useLocalStorage('type', 'posters');
  
  function changeType (type) {
      setType(type)
  }

  return (
    <TypeOfDataContext.Provider value={{ type, changeType }}>
      {children}
    </TypeOfDataContext.Provider>
  );
};
