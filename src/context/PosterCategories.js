import React, { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import useEndpoints from '../api/apiConfig';
import { fetchGet } from '../api/fetch';

export const PosterCategoriesContext = createContext(null);

export const PosterCategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useLocalStorage('categories', [])
    const endpoints = useEndpoints();
    const [selectedCategory, setSelectedCategory ] = useLocalStorage("selectedCategory", null)

    const selectCategory = (category) => {
      setSelectedCategory(category)
    }
    useEffect(() => {
        const fetchData = async () => {
        const result = await fetchGet(`${endpoints.POSTER_CATEGORIES}`);
        if (result) {
            setCategories(result)
        }
        };
        fetchData();
    }, [])
    
  return (
    <PosterCategoriesContext.Provider value={{ categories, selectCategory, selectedCategory }}>
      {children}
    </PosterCategoriesContext.Provider>
  );
};
