import React, { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('')

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};
